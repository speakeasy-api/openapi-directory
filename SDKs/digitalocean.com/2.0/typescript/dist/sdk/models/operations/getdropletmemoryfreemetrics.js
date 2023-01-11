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
exports.GetDropletMemoryFreeMetricsResponse = exports.GetDropletMemoryFreeMetricsRequest = exports.GetDropletMemoryFreeMetrics401ApplicationJson = exports.GetDropletMemoryFreeMetrics200ApplicationJson = exports.GetDropletMemoryFreeMetrics200ApplicationJsonStatusEnum = exports.GetDropletMemoryFreeMetrics200ApplicationJsonData = exports.GetDropletMemoryFreeMetrics200ApplicationJsonDataResultTypeEnum = exports.GetDropletMemoryFreeMetrics200ApplicationJsonDataResult = exports.GetDropletMemoryFreeMetricsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetDropletMemoryFreeMetricsQueryParams = /** @class */ (function (_super) {
    __extends(GetDropletMemoryFreeMetricsQueryParams, _super);
    function GetDropletMemoryFreeMetricsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", String)
    ], GetDropletMemoryFreeMetricsQueryParams.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=host_id" }),
        __metadata("design:type", String)
    ], GetDropletMemoryFreeMetricsQueryParams.prototype, "hostId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", String)
    ], GetDropletMemoryFreeMetricsQueryParams.prototype, "start", void 0);
    return GetDropletMemoryFreeMetricsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDropletMemoryFreeMetricsQueryParams = GetDropletMemoryFreeMetricsQueryParams;
var GetDropletMemoryFreeMetrics200ApplicationJsonDataResult = /** @class */ (function (_super) {
    __extends(GetDropletMemoryFreeMetrics200ApplicationJsonDataResult, _super);
    function GetDropletMemoryFreeMetrics200ApplicationJsonDataResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metric" }),
        __metadata("design:type", Object)
    ], GetDropletMemoryFreeMetrics200ApplicationJsonDataResult.prototype, "metric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=values" }),
        __metadata("design:type", Array)
    ], GetDropletMemoryFreeMetrics200ApplicationJsonDataResult.prototype, "values", void 0);
    return GetDropletMemoryFreeMetrics200ApplicationJsonDataResult;
}(utils_1.SpeakeasyBase));
exports.GetDropletMemoryFreeMetrics200ApplicationJsonDataResult = GetDropletMemoryFreeMetrics200ApplicationJsonDataResult;
var GetDropletMemoryFreeMetrics200ApplicationJsonDataResultTypeEnum;
(function (GetDropletMemoryFreeMetrics200ApplicationJsonDataResultTypeEnum) {
    GetDropletMemoryFreeMetrics200ApplicationJsonDataResultTypeEnum["Matrix"] = "matrix";
})(GetDropletMemoryFreeMetrics200ApplicationJsonDataResultTypeEnum = exports.GetDropletMemoryFreeMetrics200ApplicationJsonDataResultTypeEnum || (exports.GetDropletMemoryFreeMetrics200ApplicationJsonDataResultTypeEnum = {}));
var GetDropletMemoryFreeMetrics200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetDropletMemoryFreeMetrics200ApplicationJsonData, _super);
    function GetDropletMemoryFreeMetrics200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result", elemType: GetDropletMemoryFreeMetrics200ApplicationJsonDataResult }),
        __metadata("design:type", Array)
    ], GetDropletMemoryFreeMetrics200ApplicationJsonData.prototype, "result", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resultType" }),
        __metadata("design:type", String)
    ], GetDropletMemoryFreeMetrics200ApplicationJsonData.prototype, "resultType", void 0);
    return GetDropletMemoryFreeMetrics200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.GetDropletMemoryFreeMetrics200ApplicationJsonData = GetDropletMemoryFreeMetrics200ApplicationJsonData;
var GetDropletMemoryFreeMetrics200ApplicationJsonStatusEnum;
(function (GetDropletMemoryFreeMetrics200ApplicationJsonStatusEnum) {
    GetDropletMemoryFreeMetrics200ApplicationJsonStatusEnum["Success"] = "success";
    GetDropletMemoryFreeMetrics200ApplicationJsonStatusEnum["Error"] = "error";
})(GetDropletMemoryFreeMetrics200ApplicationJsonStatusEnum = exports.GetDropletMemoryFreeMetrics200ApplicationJsonStatusEnum || (exports.GetDropletMemoryFreeMetrics200ApplicationJsonStatusEnum = {}));
var GetDropletMemoryFreeMetrics200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDropletMemoryFreeMetrics200ApplicationJson, _super);
    function GetDropletMemoryFreeMetrics200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", GetDropletMemoryFreeMetrics200ApplicationJsonData)
    ], GetDropletMemoryFreeMetrics200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetDropletMemoryFreeMetrics200ApplicationJson.prototype, "status", void 0);
    return GetDropletMemoryFreeMetrics200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetDropletMemoryFreeMetrics200ApplicationJson = GetDropletMemoryFreeMetrics200ApplicationJson;
var GetDropletMemoryFreeMetrics401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDropletMemoryFreeMetrics401ApplicationJson, _super);
    function GetDropletMemoryFreeMetrics401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetDropletMemoryFreeMetrics401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDropletMemoryFreeMetrics401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetDropletMemoryFreeMetrics401ApplicationJson.prototype, "requestId", void 0);
    return GetDropletMemoryFreeMetrics401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetDropletMemoryFreeMetrics401ApplicationJson = GetDropletMemoryFreeMetrics401ApplicationJson;
var GetDropletMemoryFreeMetricsRequest = /** @class */ (function (_super) {
    __extends(GetDropletMemoryFreeMetricsRequest, _super);
    function GetDropletMemoryFreeMetricsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletMemoryFreeMetricsQueryParams)
    ], GetDropletMemoryFreeMetricsRequest.prototype, "queryParams", void 0);
    return GetDropletMemoryFreeMetricsRequest;
}(utils_1.SpeakeasyBase));
exports.GetDropletMemoryFreeMetricsRequest = GetDropletMemoryFreeMetricsRequest;
var GetDropletMemoryFreeMetricsResponse = /** @class */ (function (_super) {
    __extends(GetDropletMemoryFreeMetricsResponse, _super);
    function GetDropletMemoryFreeMetricsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDropletMemoryFreeMetricsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetDropletMemoryFreeMetricsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDropletMemoryFreeMetricsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletMemoryFreeMetrics200ApplicationJson)
    ], GetDropletMemoryFreeMetricsResponse.prototype, "getDropletMemoryFreeMetrics200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletMemoryFreeMetrics401ApplicationJson)
    ], GetDropletMemoryFreeMetricsResponse.prototype, "getDropletMemoryFreeMetrics401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], GetDropletMemoryFreeMetricsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return GetDropletMemoryFreeMetricsResponse;
}(utils_1.SpeakeasyBase));
exports.GetDropletMemoryFreeMetricsResponse = GetDropletMemoryFreeMetricsResponse;
