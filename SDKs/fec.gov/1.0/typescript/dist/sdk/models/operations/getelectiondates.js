"use strict";
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
exports.GetElectionDatesResponse = exports.GetElectionDatesRequest = exports.GetElectionDatesDefaultApplicationJson = exports.GetElectionDatesQueryParams = exports.GetElectionDatesOfficeSoughtEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetElectionDatesOfficeSoughtEnum;
(function (GetElectionDatesOfficeSoughtEnum) {
    GetElectionDatesOfficeSoughtEnum["H"] = "H";
    GetElectionDatesOfficeSoughtEnum["S"] = "S";
    GetElectionDatesOfficeSoughtEnum["P"] = "P";
})(GetElectionDatesOfficeSoughtEnum = exports.GetElectionDatesOfficeSoughtEnum || (exports.GetElectionDatesOfficeSoughtEnum = {}));
var GetElectionDatesQueryParams = /** @class */ (function (_super) {
    __extends(GetElectionDatesQueryParams, _super);
    function GetElectionDatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetElectionDatesQueryParams.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=election_district" }),
        __metadata("design:type", Array)
    ], GetElectionDatesQueryParams.prototype, "electionDistrict", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=election_party" }),
        __metadata("design:type", Array)
    ], GetElectionDatesQueryParams.prototype, "electionParty", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=election_state" }),
        __metadata("design:type", Array)
    ], GetElectionDatesQueryParams.prototype, "electionState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=election_type_id" }),
        __metadata("design:type", Array)
    ], GetElectionDatesQueryParams.prototype, "electionTypeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=election_year" }),
        __metadata("design:type", Array)
    ], GetElectionDatesQueryParams.prototype, "electionYear", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max_create_date" }),
        __metadata("design:type", Date)
    ], GetElectionDatesQueryParams.prototype, "maxCreateDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max_election_date" }),
        __metadata("design:type", Date)
    ], GetElectionDatesQueryParams.prototype, "maxElectionDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max_primary_general_date" }),
        __metadata("design:type", Date)
    ], GetElectionDatesQueryParams.prototype, "maxPrimaryGeneralDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max_update_date" }),
        __metadata("design:type", Date)
    ], GetElectionDatesQueryParams.prototype, "maxUpdateDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=min_create_date" }),
        __metadata("design:type", Date)
    ], GetElectionDatesQueryParams.prototype, "minCreateDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=min_election_date" }),
        __metadata("design:type", Date)
    ], GetElectionDatesQueryParams.prototype, "minElectionDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=min_primary_general_date" }),
        __metadata("design:type", Date)
    ], GetElectionDatesQueryParams.prototype, "minPrimaryGeneralDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=min_update_date" }),
        __metadata("design:type", Date)
    ], GetElectionDatesQueryParams.prototype, "minUpdateDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=office_sought" }),
        __metadata("design:type", Array)
    ], GetElectionDatesQueryParams.prototype, "officeSought", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetElectionDatesQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetElectionDatesQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetElectionDatesQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetElectionDatesQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetElectionDatesQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetElectionDatesQueryParams.prototype, "sortNullsLast", void 0);
    return GetElectionDatesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetElectionDatesQueryParams = GetElectionDatesQueryParams;
var GetElectionDatesDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetElectionDatesDefaultApplicationJson, _super);
    function GetElectionDatesDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pagination" }),
        __metadata("design:type", shared.OffsetInfo)
    ], GetElectionDatesDefaultApplicationJson.prototype, "pagination", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: shared.ElectionDate }),
        __metadata("design:type", Array)
    ], GetElectionDatesDefaultApplicationJson.prototype, "results", void 0);
    return GetElectionDatesDefaultApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetElectionDatesDefaultApplicationJson = GetElectionDatesDefaultApplicationJson;
var GetElectionDatesRequest = /** @class */ (function (_super) {
    __extends(GetElectionDatesRequest, _super);
    function GetElectionDatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetElectionDatesQueryParams)
    ], GetElectionDatesRequest.prototype, "queryParams", void 0);
    return GetElectionDatesRequest;
}(utils_1.SpeakeasyBase));
exports.GetElectionDatesRequest = GetElectionDatesRequest;
var GetElectionDatesResponse = /** @class */ (function (_super) {
    __extends(GetElectionDatesResponse, _super);
    function GetElectionDatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetElectionDatesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetElectionDatesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetElectionDatesDefaultApplicationJson)
    ], GetElectionDatesResponse.prototype, "getElectionDatesDefaultApplicationJSONObject", void 0);
    return GetElectionDatesResponse;
}(utils_1.SpeakeasyBase));
exports.GetElectionDatesResponse = GetElectionDatesResponse;
