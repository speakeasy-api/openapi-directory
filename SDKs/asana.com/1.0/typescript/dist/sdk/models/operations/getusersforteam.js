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
exports.GetUsersForTeamResponse = exports.GetUsersForTeamRequest = exports.GetUsersForTeam200ApplicationJson = exports.GetUsersForTeamQueryParams = exports.GetUsersForTeamPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetUsersForTeamPathParams = /** @class */ (function (_super) {
    __extends(GetUsersForTeamPathParams, _super);
    function GetUsersForTeamPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=team_gid" }),
        __metadata("design:type", String)
    ], GetUsersForTeamPathParams.prototype, "teamGid", void 0);
    return GetUsersForTeamPathParams;
}(utils_1.SpeakeasyBase));
exports.GetUsersForTeamPathParams = GetUsersForTeamPathParams;
var GetUsersForTeamQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersForTeamQueryParams, _super);
    function GetUsersForTeamQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetUsersForTeamQueryParams.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetUsersForTeamQueryParams.prototype, "optFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetUsersForTeamQueryParams.prototype, "optPretty", void 0);
    return GetUsersForTeamQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetUsersForTeamQueryParams = GetUsersForTeamQueryParams;
var GetUsersForTeam200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetUsersForTeam200ApplicationJson, _super);
    function GetUsersForTeam200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: shared.UserCompact }),
        __metadata("design:type", Array)
    ], GetUsersForTeam200ApplicationJson.prototype, "data", void 0);
    return GetUsersForTeam200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetUsersForTeam200ApplicationJson = GetUsersForTeam200ApplicationJson;
var GetUsersForTeamRequest = /** @class */ (function (_super) {
    __extends(GetUsersForTeamRequest, _super);
    function GetUsersForTeamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUsersForTeamPathParams)
    ], GetUsersForTeamRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUsersForTeamQueryParams)
    ], GetUsersForTeamRequest.prototype, "queryParams", void 0);
    return GetUsersForTeamRequest;
}(utils_1.SpeakeasyBase));
exports.GetUsersForTeamRequest = GetUsersForTeamRequest;
var GetUsersForTeamResponse = /** @class */ (function (_super) {
    __extends(GetUsersForTeamResponse, _super);
    function GetUsersForTeamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetUsersForTeamResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetUsersForTeamResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetUsersForTeamResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUsersForTeam200ApplicationJson)
    ], GetUsersForTeamResponse.prototype, "getUsersForTeam200ApplicationJSONObject", void 0);
    return GetUsersForTeamResponse;
}(utils_1.SpeakeasyBase));
exports.GetUsersForTeamResponse = GetUsersForTeamResponse;
