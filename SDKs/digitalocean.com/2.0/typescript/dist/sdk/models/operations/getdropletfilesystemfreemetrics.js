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
exports.GetDropletFilesystemFreeMetricsResponse = exports.GetDropletFilesystemFreeMetricsRequest = exports.GetDropletFilesystemFreeMetrics401ApplicationJson = exports.GetDropletFilesystemFreeMetrics200ApplicationJson = exports.GetDropletFilesystemFreeMetrics200ApplicationJsonStatusEnum = exports.GetDropletFilesystemFreeMetrics200ApplicationJsonData = exports.GetDropletFilesystemFreeMetrics200ApplicationJsonDataResultTypeEnum = exports.GetDropletFilesystemFreeMetrics200ApplicationJsonDataResult = exports.GetDropletFilesystemFreeMetricsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetDropletFilesystemFreeMetricsQueryParams = /** @class */ (function (_super) {
    __extends(GetDropletFilesystemFreeMetricsQueryParams, _super);
    function GetDropletFilesystemFreeMetricsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", String)
    ], GetDropletFilesystemFreeMetricsQueryParams.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=host_id" }),
        __metadata("design:type", String)
    ], GetDropletFilesystemFreeMetricsQueryParams.prototype, "hostId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", String)
    ], GetDropletFilesystemFreeMetricsQueryParams.prototype, "start", void 0);
    return GetDropletFilesystemFreeMetricsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDropletFilesystemFreeMetricsQueryParams = GetDropletFilesystemFreeMetricsQueryParams;
var GetDropletFilesystemFreeMetrics200ApplicationJsonDataResult = /** @class */ (function (_super) {
    __extends(GetDropletFilesystemFreeMetrics200ApplicationJsonDataResult, _super);
    function GetDropletFilesystemFreeMetrics200ApplicationJsonDataResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metric" }),
        __metadata("design:type", Object)
    ], GetDropletFilesystemFreeMetrics200ApplicationJsonDataResult.prototype, "metric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=values" }),
        __metadata("design:type", Array)
    ], GetDropletFilesystemFreeMetrics200ApplicationJsonDataResult.prototype, "values", void 0);
    return GetDropletFilesystemFreeMetrics200ApplicationJsonDataResult;
}(utils_1.SpeakeasyBase));
exports.GetDropletFilesystemFreeMetrics200ApplicationJsonDataResult = GetDropletFilesystemFreeMetrics200ApplicationJsonDataResult;
var GetDropletFilesystemFreeMetrics200ApplicationJsonDataResultTypeEnum;
(function (GetDropletFilesystemFreeMetrics200ApplicationJsonDataResultTypeEnum) {
    GetDropletFilesystemFreeMetrics200ApplicationJsonDataResultTypeEnum["Matrix"] = "matrix";
})(GetDropletFilesystemFreeMetrics200ApplicationJsonDataResultTypeEnum = exports.GetDropletFilesystemFreeMetrics200ApplicationJsonDataResultTypeEnum || (exports.GetDropletFilesystemFreeMetrics200ApplicationJsonDataResultTypeEnum = {}));
var GetDropletFilesystemFreeMetrics200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetDropletFilesystemFreeMetrics200ApplicationJsonData, _super);
    function GetDropletFilesystemFreeMetrics200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result", elemType: GetDropletFilesystemFreeMetrics200ApplicationJsonDataResult }),
        __metadata("design:type", Array)
    ], GetDropletFilesystemFreeMetrics200ApplicationJsonData.prototype, "result", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resultType" }),
        __metadata("design:type", String)
    ], GetDropletFilesystemFreeMetrics200ApplicationJsonData.prototype, "resultType", void 0);
    return GetDropletFilesystemFreeMetrics200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.GetDropletFilesystemFreeMetrics200ApplicationJsonData = GetDropletFilesystemFreeMetrics200ApplicationJsonData;
var GetDropletFilesystemFreeMetrics200ApplicationJsonStatusEnum;
(function (GetDropletFilesystemFreeMetrics200ApplicationJsonStatusEnum) {
    GetDropletFilesystemFreeMetrics200ApplicationJsonStatusEnum["Success"] = "success";
    GetDropletFilesystemFreeMetrics200ApplicationJsonStatusEnum["Error"] = "error";
})(GetDropletFilesystemFreeMetrics200ApplicationJsonStatusEnum = exports.GetDropletFilesystemFreeMetrics200ApplicationJsonStatusEnum || (exports.GetDropletFilesystemFreeMetrics200ApplicationJsonStatusEnum = {}));
var GetDropletFilesystemFreeMetrics200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDropletFilesystemFreeMetrics200ApplicationJson, _super);
    function GetDropletFilesystemFreeMetrics200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", GetDropletFilesystemFreeMetrics200ApplicationJsonData)
    ], GetDropletFilesystemFreeMetrics200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetDropletFilesystemFreeMetrics200ApplicationJson.prototype, "status", void 0);
    return GetDropletFilesystemFreeMetrics200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetDropletFilesystemFreeMetrics200ApplicationJson = GetDropletFilesystemFreeMetrics200ApplicationJson;
var GetDropletFilesystemFreeMetrics401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDropletFilesystemFreeMetrics401ApplicationJson, _super);
    function GetDropletFilesystemFreeMetrics401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetDropletFilesystemFreeMetrics401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDropletFilesystemFreeMetrics401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetDropletFilesystemFreeMetrics401ApplicationJson.prototype, "requestId", void 0);
    return GetDropletFilesystemFreeMetrics401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetDropletFilesystemFreeMetrics401ApplicationJson = GetDropletFilesystemFreeMetrics401ApplicationJson;
var GetDropletFilesystemFreeMetricsRequest = /** @class */ (function (_super) {
    __extends(GetDropletFilesystemFreeMetricsRequest, _super);
    function GetDropletFilesystemFreeMetricsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletFilesystemFreeMetricsQueryParams)
    ], GetDropletFilesystemFreeMetricsRequest.prototype, "queryParams", void 0);
    return GetDropletFilesystemFreeMetricsRequest;
}(utils_1.SpeakeasyBase));
exports.GetDropletFilesystemFreeMetricsRequest = GetDropletFilesystemFreeMetricsRequest;
var GetDropletFilesystemFreeMetricsResponse = /** @class */ (function (_super) {
    __extends(GetDropletFilesystemFreeMetricsResponse, _super);
    function GetDropletFilesystemFreeMetricsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDropletFilesystemFreeMetricsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetDropletFilesystemFreeMetricsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDropletFilesystemFreeMetricsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletFilesystemFreeMetrics200ApplicationJson)
    ], GetDropletFilesystemFreeMetricsResponse.prototype, "getDropletFilesystemFreeMetrics200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletFilesystemFreeMetrics401ApplicationJson)
    ], GetDropletFilesystemFreeMetricsResponse.prototype, "getDropletFilesystemFreeMetrics401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], GetDropletFilesystemFreeMetricsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return GetDropletFilesystemFreeMetricsResponse;
}(utils_1.SpeakeasyBase));
exports.GetDropletFilesystemFreeMetricsResponse = GetDropletFilesystemFreeMetricsResponse;
