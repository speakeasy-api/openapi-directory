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
exports.GetLogsResponse = exports.GetLogsRequest = exports.GetLogs401ApplicationJson = exports.GetLogs200ApplicationJson = exports.GetLogsQueryParams = exports.GetLogsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetLogsPathParams = /** @class */ (function (_super) {
    __extends(GetLogsPathParams, _super);
    function GetLogsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=app_id" }),
        __metadata("design:type", String)
    ], GetLogsPathParams.prototype, "appId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=component_name" }),
        __metadata("design:type", String)
    ], GetLogsPathParams.prototype, "componentName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=deployment_id" }),
        __metadata("design:type", String)
    ], GetLogsPathParams.prototype, "deploymentId", void 0);
    return GetLogsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetLogsPathParams = GetLogsPathParams;
var GetLogsQueryParams = /** @class */ (function (_super) {
    __extends(GetLogsQueryParams, _super);
    function GetLogsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=follow" }),
        __metadata("design:type", Boolean)
    ], GetLogsQueryParams.prototype, "follow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pod_connection_timeout" }),
        __metadata("design:type", String)
    ], GetLogsQueryParams.prototype, "podConnectionTimeout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetLogsQueryParams.prototype, "type", void 0);
    return GetLogsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetLogsQueryParams = GetLogsQueryParams;
var GetLogs200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLogs200ApplicationJson, _super);
    function GetLogs200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=historic_urls" }),
        __metadata("design:type", Array)
    ], GetLogs200ApplicationJson.prototype, "historicUrls", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=live_url" }),
        __metadata("design:type", String)
    ], GetLogs200ApplicationJson.prototype, "liveUrl", void 0);
    return GetLogs200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetLogs200ApplicationJson = GetLogs200ApplicationJson;
var GetLogs401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLogs401ApplicationJson, _super);
    function GetLogs401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetLogs401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetLogs401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetLogs401ApplicationJson.prototype, "requestId", void 0);
    return GetLogs401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetLogs401ApplicationJson = GetLogs401ApplicationJson;
var GetLogsRequest = /** @class */ (function (_super) {
    __extends(GetLogsRequest, _super);
    function GetLogsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLogsPathParams)
    ], GetLogsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLogsQueryParams)
    ], GetLogsRequest.prototype, "queryParams", void 0);
    return GetLogsRequest;
}(utils_1.SpeakeasyBase));
exports.GetLogsRequest = GetLogsRequest;
var GetLogsResponse = /** @class */ (function (_super) {
    __extends(GetLogsResponse, _super);
    function GetLogsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetLogsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetLogsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetLogsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLogs200ApplicationJson)
    ], GetLogsResponse.prototype, "getLogs200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLogs401ApplicationJson)
    ], GetLogsResponse.prototype, "getLogs401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], GetLogsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return GetLogsResponse;
}(utils_1.SpeakeasyBase));
exports.GetLogsResponse = GetLogsResponse;
