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
exports.GetDropletMemoryAvailableMetricsResponse = exports.GetDropletMemoryAvailableMetricsRequest = exports.GetDropletMemoryAvailableMetrics401ApplicationJson = exports.GetDropletMemoryAvailableMetrics200ApplicationJson = exports.GetDropletMemoryAvailableMetrics200ApplicationJsonStatusEnum = exports.GetDropletMemoryAvailableMetrics200ApplicationJsonData = exports.GetDropletMemoryAvailableMetrics200ApplicationJsonDataResultTypeEnum = exports.GetDropletMemoryAvailableMetrics200ApplicationJsonDataResult = exports.GetDropletMemoryAvailableMetricsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetDropletMemoryAvailableMetricsQueryParams = /** @class */ (function (_super) {
    __extends(GetDropletMemoryAvailableMetricsQueryParams, _super);
    function GetDropletMemoryAvailableMetricsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", String)
    ], GetDropletMemoryAvailableMetricsQueryParams.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=host_id" }),
        __metadata("design:type", String)
    ], GetDropletMemoryAvailableMetricsQueryParams.prototype, "hostId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", String)
    ], GetDropletMemoryAvailableMetricsQueryParams.prototype, "start", void 0);
    return GetDropletMemoryAvailableMetricsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDropletMemoryAvailableMetricsQueryParams = GetDropletMemoryAvailableMetricsQueryParams;
var GetDropletMemoryAvailableMetrics200ApplicationJsonDataResult = /** @class */ (function (_super) {
    __extends(GetDropletMemoryAvailableMetrics200ApplicationJsonDataResult, _super);
    function GetDropletMemoryAvailableMetrics200ApplicationJsonDataResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metric" }),
        __metadata("design:type", Object)
    ], GetDropletMemoryAvailableMetrics200ApplicationJsonDataResult.prototype, "metric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=values" }),
        __metadata("design:type", Array)
    ], GetDropletMemoryAvailableMetrics200ApplicationJsonDataResult.prototype, "values", void 0);
    return GetDropletMemoryAvailableMetrics200ApplicationJsonDataResult;
}(utils_1.SpeakeasyBase));
exports.GetDropletMemoryAvailableMetrics200ApplicationJsonDataResult = GetDropletMemoryAvailableMetrics200ApplicationJsonDataResult;
var GetDropletMemoryAvailableMetrics200ApplicationJsonDataResultTypeEnum;
(function (GetDropletMemoryAvailableMetrics200ApplicationJsonDataResultTypeEnum) {
    GetDropletMemoryAvailableMetrics200ApplicationJsonDataResultTypeEnum["Matrix"] = "matrix";
})(GetDropletMemoryAvailableMetrics200ApplicationJsonDataResultTypeEnum = exports.GetDropletMemoryAvailableMetrics200ApplicationJsonDataResultTypeEnum || (exports.GetDropletMemoryAvailableMetrics200ApplicationJsonDataResultTypeEnum = {}));
var GetDropletMemoryAvailableMetrics200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetDropletMemoryAvailableMetrics200ApplicationJsonData, _super);
    function GetDropletMemoryAvailableMetrics200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result", elemType: GetDropletMemoryAvailableMetrics200ApplicationJsonDataResult }),
        __metadata("design:type", Array)
    ], GetDropletMemoryAvailableMetrics200ApplicationJsonData.prototype, "result", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resultType" }),
        __metadata("design:type", String)
    ], GetDropletMemoryAvailableMetrics200ApplicationJsonData.prototype, "resultType", void 0);
    return GetDropletMemoryAvailableMetrics200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.GetDropletMemoryAvailableMetrics200ApplicationJsonData = GetDropletMemoryAvailableMetrics200ApplicationJsonData;
var GetDropletMemoryAvailableMetrics200ApplicationJsonStatusEnum;
(function (GetDropletMemoryAvailableMetrics200ApplicationJsonStatusEnum) {
    GetDropletMemoryAvailableMetrics200ApplicationJsonStatusEnum["Success"] = "success";
    GetDropletMemoryAvailableMetrics200ApplicationJsonStatusEnum["Error"] = "error";
})(GetDropletMemoryAvailableMetrics200ApplicationJsonStatusEnum = exports.GetDropletMemoryAvailableMetrics200ApplicationJsonStatusEnum || (exports.GetDropletMemoryAvailableMetrics200ApplicationJsonStatusEnum = {}));
var GetDropletMemoryAvailableMetrics200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDropletMemoryAvailableMetrics200ApplicationJson, _super);
    function GetDropletMemoryAvailableMetrics200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", GetDropletMemoryAvailableMetrics200ApplicationJsonData)
    ], GetDropletMemoryAvailableMetrics200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetDropletMemoryAvailableMetrics200ApplicationJson.prototype, "status", void 0);
    return GetDropletMemoryAvailableMetrics200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetDropletMemoryAvailableMetrics200ApplicationJson = GetDropletMemoryAvailableMetrics200ApplicationJson;
var GetDropletMemoryAvailableMetrics401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDropletMemoryAvailableMetrics401ApplicationJson, _super);
    function GetDropletMemoryAvailableMetrics401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetDropletMemoryAvailableMetrics401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDropletMemoryAvailableMetrics401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetDropletMemoryAvailableMetrics401ApplicationJson.prototype, "requestId", void 0);
    return GetDropletMemoryAvailableMetrics401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetDropletMemoryAvailableMetrics401ApplicationJson = GetDropletMemoryAvailableMetrics401ApplicationJson;
var GetDropletMemoryAvailableMetricsRequest = /** @class */ (function (_super) {
    __extends(GetDropletMemoryAvailableMetricsRequest, _super);
    function GetDropletMemoryAvailableMetricsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletMemoryAvailableMetricsQueryParams)
    ], GetDropletMemoryAvailableMetricsRequest.prototype, "queryParams", void 0);
    return GetDropletMemoryAvailableMetricsRequest;
}(utils_1.SpeakeasyBase));
exports.GetDropletMemoryAvailableMetricsRequest = GetDropletMemoryAvailableMetricsRequest;
var GetDropletMemoryAvailableMetricsResponse = /** @class */ (function (_super) {
    __extends(GetDropletMemoryAvailableMetricsResponse, _super);
    function GetDropletMemoryAvailableMetricsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDropletMemoryAvailableMetricsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetDropletMemoryAvailableMetricsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDropletMemoryAvailableMetricsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletMemoryAvailableMetrics200ApplicationJson)
    ], GetDropletMemoryAvailableMetricsResponse.prototype, "getDropletMemoryAvailableMetrics200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletMemoryAvailableMetrics401ApplicationJson)
    ], GetDropletMemoryAvailableMetricsResponse.prototype, "getDropletMemoryAvailableMetrics401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], GetDropletMemoryAvailableMetricsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return GetDropletMemoryAvailableMetricsResponse;
}(utils_1.SpeakeasyBase));
exports.GetDropletMemoryAvailableMetricsResponse = GetDropletMemoryAvailableMetricsResponse;
