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
exports.GetDropletCpuMetricsResponse = exports.GetDropletCpuMetricsRequest = exports.GetDropletCpuMetrics401ApplicationJson = exports.GetDropletCpuMetrics200ApplicationJson = exports.GetDropletCpuMetrics200ApplicationJsonStatusEnum = exports.GetDropletCpuMetrics200ApplicationJsonData = exports.GetDropletCpuMetrics200ApplicationJsonDataResultTypeEnum = exports.GetDropletCpuMetrics200ApplicationJsonDataResult = exports.GetDropletCpuMetricsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetDropletCpuMetricsQueryParams = /** @class */ (function (_super) {
    __extends(GetDropletCpuMetricsQueryParams, _super);
    function GetDropletCpuMetricsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", String)
    ], GetDropletCpuMetricsQueryParams.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=host_id" }),
        __metadata("design:type", String)
    ], GetDropletCpuMetricsQueryParams.prototype, "hostId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", String)
    ], GetDropletCpuMetricsQueryParams.prototype, "start", void 0);
    return GetDropletCpuMetricsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDropletCpuMetricsQueryParams = GetDropletCpuMetricsQueryParams;
var GetDropletCpuMetrics200ApplicationJsonDataResult = /** @class */ (function (_super) {
    __extends(GetDropletCpuMetrics200ApplicationJsonDataResult, _super);
    function GetDropletCpuMetrics200ApplicationJsonDataResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metric" }),
        __metadata("design:type", Object)
    ], GetDropletCpuMetrics200ApplicationJsonDataResult.prototype, "metric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=values" }),
        __metadata("design:type", Array)
    ], GetDropletCpuMetrics200ApplicationJsonDataResult.prototype, "values", void 0);
    return GetDropletCpuMetrics200ApplicationJsonDataResult;
}(utils_1.SpeakeasyBase));
exports.GetDropletCpuMetrics200ApplicationJsonDataResult = GetDropletCpuMetrics200ApplicationJsonDataResult;
var GetDropletCpuMetrics200ApplicationJsonDataResultTypeEnum;
(function (GetDropletCpuMetrics200ApplicationJsonDataResultTypeEnum) {
    GetDropletCpuMetrics200ApplicationJsonDataResultTypeEnum["Matrix"] = "matrix";
})(GetDropletCpuMetrics200ApplicationJsonDataResultTypeEnum = exports.GetDropletCpuMetrics200ApplicationJsonDataResultTypeEnum || (exports.GetDropletCpuMetrics200ApplicationJsonDataResultTypeEnum = {}));
var GetDropletCpuMetrics200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetDropletCpuMetrics200ApplicationJsonData, _super);
    function GetDropletCpuMetrics200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result", elemType: GetDropletCpuMetrics200ApplicationJsonDataResult }),
        __metadata("design:type", Array)
    ], GetDropletCpuMetrics200ApplicationJsonData.prototype, "result", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resultType" }),
        __metadata("design:type", String)
    ], GetDropletCpuMetrics200ApplicationJsonData.prototype, "resultType", void 0);
    return GetDropletCpuMetrics200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.GetDropletCpuMetrics200ApplicationJsonData = GetDropletCpuMetrics200ApplicationJsonData;
var GetDropletCpuMetrics200ApplicationJsonStatusEnum;
(function (GetDropletCpuMetrics200ApplicationJsonStatusEnum) {
    GetDropletCpuMetrics200ApplicationJsonStatusEnum["Success"] = "success";
    GetDropletCpuMetrics200ApplicationJsonStatusEnum["Error"] = "error";
})(GetDropletCpuMetrics200ApplicationJsonStatusEnum = exports.GetDropletCpuMetrics200ApplicationJsonStatusEnum || (exports.GetDropletCpuMetrics200ApplicationJsonStatusEnum = {}));
var GetDropletCpuMetrics200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDropletCpuMetrics200ApplicationJson, _super);
    function GetDropletCpuMetrics200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", GetDropletCpuMetrics200ApplicationJsonData)
    ], GetDropletCpuMetrics200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetDropletCpuMetrics200ApplicationJson.prototype, "status", void 0);
    return GetDropletCpuMetrics200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetDropletCpuMetrics200ApplicationJson = GetDropletCpuMetrics200ApplicationJson;
var GetDropletCpuMetrics401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDropletCpuMetrics401ApplicationJson, _super);
    function GetDropletCpuMetrics401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetDropletCpuMetrics401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDropletCpuMetrics401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetDropletCpuMetrics401ApplicationJson.prototype, "requestId", void 0);
    return GetDropletCpuMetrics401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetDropletCpuMetrics401ApplicationJson = GetDropletCpuMetrics401ApplicationJson;
var GetDropletCpuMetricsRequest = /** @class */ (function (_super) {
    __extends(GetDropletCpuMetricsRequest, _super);
    function GetDropletCpuMetricsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletCpuMetricsQueryParams)
    ], GetDropletCpuMetricsRequest.prototype, "queryParams", void 0);
    return GetDropletCpuMetricsRequest;
}(utils_1.SpeakeasyBase));
exports.GetDropletCpuMetricsRequest = GetDropletCpuMetricsRequest;
var GetDropletCpuMetricsResponse = /** @class */ (function (_super) {
    __extends(GetDropletCpuMetricsResponse, _super);
    function GetDropletCpuMetricsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDropletCpuMetricsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetDropletCpuMetricsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDropletCpuMetricsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletCpuMetrics200ApplicationJson)
    ], GetDropletCpuMetricsResponse.prototype, "getDropletCpuMetrics200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletCpuMetrics401ApplicationJson)
    ], GetDropletCpuMetricsResponse.prototype, "getDropletCpuMetrics401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], GetDropletCpuMetricsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return GetDropletCpuMetricsResponse;
}(utils_1.SpeakeasyBase));
exports.GetDropletCpuMetricsResponse = GetDropletCpuMetricsResponse;
