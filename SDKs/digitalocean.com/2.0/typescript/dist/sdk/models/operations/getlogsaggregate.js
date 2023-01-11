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
exports.GetLogsAggregateResponse = exports.GetLogsAggregateRequest = exports.GetLogsAggregate401ApplicationJson = exports.GetLogsAggregateQueryParams = exports.GetLogsAggregatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetLogsAggregatePathParams = /** @class */ (function (_super) {
    __extends(GetLogsAggregatePathParams, _super);
    function GetLogsAggregatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=app_id" }),
        __metadata("design:type", String)
    ], GetLogsAggregatePathParams.prototype, "appId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=deployment_id" }),
        __metadata("design:type", String)
    ], GetLogsAggregatePathParams.prototype, "deploymentId", void 0);
    return GetLogsAggregatePathParams;
}(utils_1.SpeakeasyBase));
exports.GetLogsAggregatePathParams = GetLogsAggregatePathParams;
var GetLogsAggregateQueryParams = /** @class */ (function (_super) {
    __extends(GetLogsAggregateQueryParams, _super);
    function GetLogsAggregateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=follow" }),
        __metadata("design:type", Boolean)
    ], GetLogsAggregateQueryParams.prototype, "follow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pod_connection_timeout" }),
        __metadata("design:type", String)
    ], GetLogsAggregateQueryParams.prototype, "podConnectionTimeout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetLogsAggregateQueryParams.prototype, "type", void 0);
    return GetLogsAggregateQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetLogsAggregateQueryParams = GetLogsAggregateQueryParams;
var GetLogsAggregate401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLogsAggregate401ApplicationJson, _super);
    function GetLogsAggregate401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetLogsAggregate401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetLogsAggregate401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetLogsAggregate401ApplicationJson.prototype, "requestId", void 0);
    return GetLogsAggregate401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetLogsAggregate401ApplicationJson = GetLogsAggregate401ApplicationJson;
var GetLogsAggregateRequest = /** @class */ (function (_super) {
    __extends(GetLogsAggregateRequest, _super);
    function GetLogsAggregateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLogsAggregatePathParams)
    ], GetLogsAggregateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLogsAggregateQueryParams)
    ], GetLogsAggregateRequest.prototype, "queryParams", void 0);
    return GetLogsAggregateRequest;
}(utils_1.SpeakeasyBase));
exports.GetLogsAggregateRequest = GetLogsAggregateRequest;
var GetLogsAggregateResponse = /** @class */ (function (_super) {
    __extends(GetLogsAggregateResponse, _super);
    function GetLogsAggregateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetLogsAggregateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLogsAggregateResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetLogsAggregateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLogsAggregate401ApplicationJson)
    ], GetLogsAggregateResponse.prototype, "getLogsAggregate401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], GetLogsAggregateResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev21apps1Percent7BappIdPercent7D1deployments1Percent7BdeploymentIdPercent7D1components1Percent7BcomponentNamePercent7D1logsGetResponses200ContentApplication1jsonSchema)
    ], GetLogsAggregateResponse.prototype, "onev21apps1Percent7BappIdPercent7D1deployments1Percent7BdeploymentIdPercent7D1components1Percent7BcomponentNamePercent7D1logsGetResponses200ContentApplication1jsonSchema", void 0);
    return GetLogsAggregateResponse;
}(utils_1.SpeakeasyBase));
exports.GetLogsAggregateResponse = GetLogsAggregateResponse;
