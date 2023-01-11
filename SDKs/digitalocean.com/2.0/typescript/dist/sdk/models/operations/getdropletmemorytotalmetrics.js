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
exports.GetDropletMemoryTotalMetricsResponse = exports.GetDropletMemoryTotalMetricsRequest = exports.GetDropletMemoryTotalMetrics401ApplicationJson = exports.GetDropletMemoryTotalMetrics200ApplicationJson = exports.GetDropletMemoryTotalMetrics200ApplicationJsonStatusEnum = exports.GetDropletMemoryTotalMetrics200ApplicationJsonData = exports.GetDropletMemoryTotalMetrics200ApplicationJsonDataResultTypeEnum = exports.GetDropletMemoryTotalMetrics200ApplicationJsonDataResult = exports.GetDropletMemoryTotalMetricsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetDropletMemoryTotalMetricsQueryParams = /** @class */ (function (_super) {
    __extends(GetDropletMemoryTotalMetricsQueryParams, _super);
    function GetDropletMemoryTotalMetricsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", String)
    ], GetDropletMemoryTotalMetricsQueryParams.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=host_id" }),
        __metadata("design:type", String)
    ], GetDropletMemoryTotalMetricsQueryParams.prototype, "hostId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", String)
    ], GetDropletMemoryTotalMetricsQueryParams.prototype, "start", void 0);
    return GetDropletMemoryTotalMetricsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDropletMemoryTotalMetricsQueryParams = GetDropletMemoryTotalMetricsQueryParams;
var GetDropletMemoryTotalMetrics200ApplicationJsonDataResult = /** @class */ (function (_super) {
    __extends(GetDropletMemoryTotalMetrics200ApplicationJsonDataResult, _super);
    function GetDropletMemoryTotalMetrics200ApplicationJsonDataResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metric" }),
        __metadata("design:type", Object)
    ], GetDropletMemoryTotalMetrics200ApplicationJsonDataResult.prototype, "metric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=values" }),
        __metadata("design:type", Array)
    ], GetDropletMemoryTotalMetrics200ApplicationJsonDataResult.prototype, "values", void 0);
    return GetDropletMemoryTotalMetrics200ApplicationJsonDataResult;
}(utils_1.SpeakeasyBase));
exports.GetDropletMemoryTotalMetrics200ApplicationJsonDataResult = GetDropletMemoryTotalMetrics200ApplicationJsonDataResult;
var GetDropletMemoryTotalMetrics200ApplicationJsonDataResultTypeEnum;
(function (GetDropletMemoryTotalMetrics200ApplicationJsonDataResultTypeEnum) {
    GetDropletMemoryTotalMetrics200ApplicationJsonDataResultTypeEnum["Matrix"] = "matrix";
})(GetDropletMemoryTotalMetrics200ApplicationJsonDataResultTypeEnum = exports.GetDropletMemoryTotalMetrics200ApplicationJsonDataResultTypeEnum || (exports.GetDropletMemoryTotalMetrics200ApplicationJsonDataResultTypeEnum = {}));
var GetDropletMemoryTotalMetrics200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetDropletMemoryTotalMetrics200ApplicationJsonData, _super);
    function GetDropletMemoryTotalMetrics200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result", elemType: GetDropletMemoryTotalMetrics200ApplicationJsonDataResult }),
        __metadata("design:type", Array)
    ], GetDropletMemoryTotalMetrics200ApplicationJsonData.prototype, "result", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resultType" }),
        __metadata("design:type", String)
    ], GetDropletMemoryTotalMetrics200ApplicationJsonData.prototype, "resultType", void 0);
    return GetDropletMemoryTotalMetrics200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.GetDropletMemoryTotalMetrics200ApplicationJsonData = GetDropletMemoryTotalMetrics200ApplicationJsonData;
var GetDropletMemoryTotalMetrics200ApplicationJsonStatusEnum;
(function (GetDropletMemoryTotalMetrics200ApplicationJsonStatusEnum) {
    GetDropletMemoryTotalMetrics200ApplicationJsonStatusEnum["Success"] = "success";
    GetDropletMemoryTotalMetrics200ApplicationJsonStatusEnum["Error"] = "error";
})(GetDropletMemoryTotalMetrics200ApplicationJsonStatusEnum = exports.GetDropletMemoryTotalMetrics200ApplicationJsonStatusEnum || (exports.GetDropletMemoryTotalMetrics200ApplicationJsonStatusEnum = {}));
var GetDropletMemoryTotalMetrics200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDropletMemoryTotalMetrics200ApplicationJson, _super);
    function GetDropletMemoryTotalMetrics200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", GetDropletMemoryTotalMetrics200ApplicationJsonData)
    ], GetDropletMemoryTotalMetrics200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetDropletMemoryTotalMetrics200ApplicationJson.prototype, "status", void 0);
    return GetDropletMemoryTotalMetrics200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetDropletMemoryTotalMetrics200ApplicationJson = GetDropletMemoryTotalMetrics200ApplicationJson;
var GetDropletMemoryTotalMetrics401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDropletMemoryTotalMetrics401ApplicationJson, _super);
    function GetDropletMemoryTotalMetrics401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetDropletMemoryTotalMetrics401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDropletMemoryTotalMetrics401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetDropletMemoryTotalMetrics401ApplicationJson.prototype, "requestId", void 0);
    return GetDropletMemoryTotalMetrics401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetDropletMemoryTotalMetrics401ApplicationJson = GetDropletMemoryTotalMetrics401ApplicationJson;
var GetDropletMemoryTotalMetricsRequest = /** @class */ (function (_super) {
    __extends(GetDropletMemoryTotalMetricsRequest, _super);
    function GetDropletMemoryTotalMetricsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletMemoryTotalMetricsQueryParams)
    ], GetDropletMemoryTotalMetricsRequest.prototype, "queryParams", void 0);
    return GetDropletMemoryTotalMetricsRequest;
}(utils_1.SpeakeasyBase));
exports.GetDropletMemoryTotalMetricsRequest = GetDropletMemoryTotalMetricsRequest;
var GetDropletMemoryTotalMetricsResponse = /** @class */ (function (_super) {
    __extends(GetDropletMemoryTotalMetricsResponse, _super);
    function GetDropletMemoryTotalMetricsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDropletMemoryTotalMetricsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetDropletMemoryTotalMetricsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDropletMemoryTotalMetricsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletMemoryTotalMetrics200ApplicationJson)
    ], GetDropletMemoryTotalMetricsResponse.prototype, "getDropletMemoryTotalMetrics200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletMemoryTotalMetrics401ApplicationJson)
    ], GetDropletMemoryTotalMetricsResponse.prototype, "getDropletMemoryTotalMetrics401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], GetDropletMemoryTotalMetricsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return GetDropletMemoryTotalMetricsResponse;
}(utils_1.SpeakeasyBase));
exports.GetDropletMemoryTotalMetricsResponse = GetDropletMemoryTotalMetricsResponse;
