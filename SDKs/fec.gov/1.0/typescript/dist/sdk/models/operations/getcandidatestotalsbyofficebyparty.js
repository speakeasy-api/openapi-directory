"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCandidatesTotalsByOfficeByPartyResponse = exports.GetCandidatesTotalsByOfficeByPartyRequest = exports.GetCandidatesTotalsByOfficeByPartyOfficeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
/**
 * Federal office candidate runs for: H, S or P
 */
var GetCandidatesTotalsByOfficeByPartyOfficeEnum;
(function (GetCandidatesTotalsByOfficeByPartyOfficeEnum) {
    GetCandidatesTotalsByOfficeByPartyOfficeEnum["Unknown"] = "";
    GetCandidatesTotalsByOfficeByPartyOfficeEnum["H"] = "H";
    GetCandidatesTotalsByOfficeByPartyOfficeEnum["S"] = "S";
    GetCandidatesTotalsByOfficeByPartyOfficeEnum["P"] = "P";
})(GetCandidatesTotalsByOfficeByPartyOfficeEnum = exports.GetCandidatesTotalsByOfficeByPartyOfficeEnum || (exports.GetCandidatesTotalsByOfficeByPartyOfficeEnum = {}));
var GetCandidatesTotalsByOfficeByPartyRequest = /** @class */ (function (_super) {
    __extends(GetCandidatesTotalsByOfficeByPartyRequest, _super);
    function GetCandidatesTotalsByOfficeByPartyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=api_key",
        }),
        __metadata("design:type", String)
    ], GetCandidatesTotalsByOfficeByPartyRequest.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=election_full",
        }),
        __metadata("design:type", Boolean)
    ], GetCandidatesTotalsByOfficeByPartyRequest.prototype, "electionFull", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=election_year",
        }),
        __metadata("design:type", Array)
    ], GetCandidatesTotalsByOfficeByPartyRequest.prototype, "electionYear", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=is_active_candidate",
        }),
        __metadata("design:type", Boolean)
    ], GetCandidatesTotalsByOfficeByPartyRequest.prototype, "isActiveCandidate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=office",
        }),
        __metadata("design:type", String)
    ], GetCandidatesTotalsByOfficeByPartyRequest.prototype, "office", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCandidatesTotalsByOfficeByPartyRequest.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=per_page",
        }),
        __metadata("design:type", Number)
    ], GetCandidatesTotalsByOfficeByPartyRequest.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCandidatesTotalsByOfficeByPartyRequest.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=sort_hide_null",
        }),
        __metadata("design:type", Boolean)
    ], GetCandidatesTotalsByOfficeByPartyRequest.prototype, "sortHideNull", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=sort_null_only",
        }),
        __metadata("design:type", Boolean)
    ], GetCandidatesTotalsByOfficeByPartyRequest.prototype, "sortNullOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=sort_nulls_last",
        }),
        __metadata("design:type", Boolean)
    ], GetCandidatesTotalsByOfficeByPartyRequest.prototype, "sortNullsLast", void 0);
    return GetCandidatesTotalsByOfficeByPartyRequest;
}(utils_1.SpeakeasyBase));
exports.GetCandidatesTotalsByOfficeByPartyRequest = GetCandidatesTotalsByOfficeByPartyRequest;
var GetCandidatesTotalsByOfficeByPartyResponse = /** @class */ (function (_super) {
    __extends(GetCandidatesTotalsByOfficeByPartyResponse, _super);
    function GetCandidatesTotalsByOfficeByPartyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetCandidatesTotalsByOfficeByPartyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetCandidatesTotalsByOfficeByPartyResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetCandidatesTotalsByOfficeByPartyResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.TotalByOfficeByPartyPage)
    ], GetCandidatesTotalsByOfficeByPartyResponse.prototype, "totalByOfficeByPartyPage", void 0);
    return GetCandidatesTotalsByOfficeByPartyResponse;
}(utils_1.SpeakeasyBase));
exports.GetCandidatesTotalsByOfficeByPartyResponse = GetCandidatesTotalsByOfficeByPartyResponse;
