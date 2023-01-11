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
exports.GetTagsForWorkspaceResponse = exports.GetTagsForWorkspaceRequest = exports.GetTagsForWorkspace200ApplicationJson = exports.GetTagsForWorkspaceQueryParams = exports.GetTagsForWorkspacePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetTagsForWorkspacePathParams = /** @class */ (function (_super) {
    __extends(GetTagsForWorkspacePathParams, _super);
    function GetTagsForWorkspacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=workspace_gid" }),
        __metadata("design:type", String)
    ], GetTagsForWorkspacePathParams.prototype, "workspaceGid", void 0);
    return GetTagsForWorkspacePathParams;
}(utils_1.SpeakeasyBase));
exports.GetTagsForWorkspacePathParams = GetTagsForWorkspacePathParams;
var GetTagsForWorkspaceQueryParams = /** @class */ (function (_super) {
    __extends(GetTagsForWorkspaceQueryParams, _super);
    function GetTagsForWorkspaceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetTagsForWorkspaceQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetTagsForWorkspaceQueryParams.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetTagsForWorkspaceQueryParams.prototype, "optFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetTagsForWorkspaceQueryParams.prototype, "optPretty", void 0);
    return GetTagsForWorkspaceQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetTagsForWorkspaceQueryParams = GetTagsForWorkspaceQueryParams;
var GetTagsForWorkspace200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTagsForWorkspace200ApplicationJson, _super);
    function GetTagsForWorkspace200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: shared.TagCompact }),
        __metadata("design:type", Array)
    ], GetTagsForWorkspace200ApplicationJson.prototype, "data", void 0);
    return GetTagsForWorkspace200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTagsForWorkspace200ApplicationJson = GetTagsForWorkspace200ApplicationJson;
var GetTagsForWorkspaceRequest = /** @class */ (function (_super) {
    __extends(GetTagsForWorkspaceRequest, _super);
    function GetTagsForWorkspaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTagsForWorkspacePathParams)
    ], GetTagsForWorkspaceRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTagsForWorkspaceQueryParams)
    ], GetTagsForWorkspaceRequest.prototype, "queryParams", void 0);
    return GetTagsForWorkspaceRequest;
}(utils_1.SpeakeasyBase));
exports.GetTagsForWorkspaceRequest = GetTagsForWorkspaceRequest;
var GetTagsForWorkspaceResponse = /** @class */ (function (_super) {
    __extends(GetTagsForWorkspaceResponse, _super);
    function GetTagsForWorkspaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTagsForWorkspaceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetTagsForWorkspaceResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTagsForWorkspaceResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTagsForWorkspace200ApplicationJson)
    ], GetTagsForWorkspaceResponse.prototype, "getTagsForWorkspace200ApplicationJSONObject", void 0);
    return GetTagsForWorkspaceResponse;
}(utils_1.SpeakeasyBase));
exports.GetTagsForWorkspaceResponse = GetTagsForWorkspaceResponse;
