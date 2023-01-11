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
exports.GetDropletMemoryCachedMetricsResponse = exports.GetDropletMemoryCachedMetricsRequest = exports.GetDropletMemoryCachedMetrics401ApplicationJson = exports.GetDropletMemoryCachedMetrics200ApplicationJson = exports.GetDropletMemoryCachedMetrics200ApplicationJsonStatusEnum = exports.GetDropletMemoryCachedMetrics200ApplicationJsonData = exports.GetDropletMemoryCachedMetrics200ApplicationJsonDataResultTypeEnum = exports.GetDropletMemoryCachedMetrics200ApplicationJsonDataResult = exports.GetDropletMemoryCachedMetricsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetDropletMemoryCachedMetricsQueryParams = /** @class */ (function (_super) {
    __extends(GetDropletMemoryCachedMetricsQueryParams, _super);
    function GetDropletMemoryCachedMetricsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", String)
    ], GetDropletMemoryCachedMetricsQueryParams.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=host_id" }),
        __metadata("design:type", String)
    ], GetDropletMemoryCachedMetricsQueryParams.prototype, "hostId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", String)
    ], GetDropletMemoryCachedMetricsQueryParams.prototype, "start", void 0);
    return GetDropletMemoryCachedMetricsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDropletMemoryCachedMetricsQueryParams = GetDropletMemoryCachedMetricsQueryParams;
var GetDropletMemoryCachedMetrics200ApplicationJsonDataResult = /** @class */ (function (_super) {
    __extends(GetDropletMemoryCachedMetrics200ApplicationJsonDataResult, _super);
    function GetDropletMemoryCachedMetrics200ApplicationJsonDataResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metric" }),
        __metadata("design:type", Object)
    ], GetDropletMemoryCachedMetrics200ApplicationJsonDataResult.prototype, "metric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=values" }),
        __metadata("design:type", Array)
    ], GetDropletMemoryCachedMetrics200ApplicationJsonDataResult.prototype, "values", void 0);
    return GetDropletMemoryCachedMetrics200ApplicationJsonDataResult;
}(utils_1.SpeakeasyBase));
exports.GetDropletMemoryCachedMetrics200ApplicationJsonDataResult = GetDropletMemoryCachedMetrics200ApplicationJsonDataResult;
var GetDropletMemoryCachedMetrics200ApplicationJsonDataResultTypeEnum;
(function (GetDropletMemoryCachedMetrics200ApplicationJsonDataResultTypeEnum) {
    GetDropletMemoryCachedMetrics200ApplicationJsonDataResultTypeEnum["Matrix"] = "matrix";
})(GetDropletMemoryCachedMetrics200ApplicationJsonDataResultTypeEnum = exports.GetDropletMemoryCachedMetrics200ApplicationJsonDataResultTypeEnum || (exports.GetDropletMemoryCachedMetrics200ApplicationJsonDataResultTypeEnum = {}));
var GetDropletMemoryCachedMetrics200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetDropletMemoryCachedMetrics200ApplicationJsonData, _super);
    function GetDropletMemoryCachedMetrics200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result", elemType: GetDropletMemoryCachedMetrics200ApplicationJsonDataResult }),
        __metadata("design:type", Array)
    ], GetDropletMemoryCachedMetrics200ApplicationJsonData.prototype, "result", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resultType" }),
        __metadata("design:type", String)
    ], GetDropletMemoryCachedMetrics200ApplicationJsonData.prototype, "resultType", void 0);
    return GetDropletMemoryCachedMetrics200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.GetDropletMemoryCachedMetrics200ApplicationJsonData = GetDropletMemoryCachedMetrics200ApplicationJsonData;
var GetDropletMemoryCachedMetrics200ApplicationJsonStatusEnum;
(function (GetDropletMemoryCachedMetrics200ApplicationJsonStatusEnum) {
    GetDropletMemoryCachedMetrics200ApplicationJsonStatusEnum["Success"] = "success";
    GetDropletMemoryCachedMetrics200ApplicationJsonStatusEnum["Error"] = "error";
})(GetDropletMemoryCachedMetrics200ApplicationJsonStatusEnum = exports.GetDropletMemoryCachedMetrics200ApplicationJsonStatusEnum || (exports.GetDropletMemoryCachedMetrics200ApplicationJsonStatusEnum = {}));
var GetDropletMemoryCachedMetrics200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDropletMemoryCachedMetrics200ApplicationJson, _super);
    function GetDropletMemoryCachedMetrics200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", GetDropletMemoryCachedMetrics200ApplicationJsonData)
    ], GetDropletMemoryCachedMetrics200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetDropletMemoryCachedMetrics200ApplicationJson.prototype, "status", void 0);
    return GetDropletMemoryCachedMetrics200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetDropletMemoryCachedMetrics200ApplicationJson = GetDropletMemoryCachedMetrics200ApplicationJson;
var GetDropletMemoryCachedMetrics401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDropletMemoryCachedMetrics401ApplicationJson, _super);
    function GetDropletMemoryCachedMetrics401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetDropletMemoryCachedMetrics401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDropletMemoryCachedMetrics401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetDropletMemoryCachedMetrics401ApplicationJson.prototype, "requestId", void 0);
    return GetDropletMemoryCachedMetrics401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetDropletMemoryCachedMetrics401ApplicationJson = GetDropletMemoryCachedMetrics401ApplicationJson;
var GetDropletMemoryCachedMetricsRequest = /** @class */ (function (_super) {
    __extends(GetDropletMemoryCachedMetricsRequest, _super);
    function GetDropletMemoryCachedMetricsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletMemoryCachedMetricsQueryParams)
    ], GetDropletMemoryCachedMetricsRequest.prototype, "queryParams", void 0);
    return GetDropletMemoryCachedMetricsRequest;
}(utils_1.SpeakeasyBase));
exports.GetDropletMemoryCachedMetricsRequest = GetDropletMemoryCachedMetricsRequest;
var GetDropletMemoryCachedMetricsResponse = /** @class */ (function (_super) {
    __extends(GetDropletMemoryCachedMetricsResponse, _super);
    function GetDropletMemoryCachedMetricsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDropletMemoryCachedMetricsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetDropletMemoryCachedMetricsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDropletMemoryCachedMetricsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletMemoryCachedMetrics200ApplicationJson)
    ], GetDropletMemoryCachedMetricsResponse.prototype, "getDropletMemoryCachedMetrics200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletMemoryCachedMetrics401ApplicationJson)
    ], GetDropletMemoryCachedMetricsResponse.prototype, "getDropletMemoryCachedMetrics401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], GetDropletMemoryCachedMetricsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return GetDropletMemoryCachedMetricsResponse;
}(utils_1.SpeakeasyBase));
exports.GetDropletMemoryCachedMetricsResponse = GetDropletMemoryCachedMetricsResponse;
