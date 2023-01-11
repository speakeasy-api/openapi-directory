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
exports.GetDropletBandwidthMetricsResponse = exports.GetDropletBandwidthMetricsRequest = exports.GetDropletBandwidthMetrics401ApplicationJson = exports.GetDropletBandwidthMetrics200ApplicationJson = exports.GetDropletBandwidthMetrics200ApplicationJsonStatusEnum = exports.GetDropletBandwidthMetrics200ApplicationJsonData = exports.GetDropletBandwidthMetrics200ApplicationJsonDataResultTypeEnum = exports.GetDropletBandwidthMetrics200ApplicationJsonDataResult = exports.GetDropletBandwidthMetricsQueryParams = exports.GetDropletBandwidthMetricsInterfaceEnum = exports.GetDropletBandwidthMetricsDirectionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetDropletBandwidthMetricsDirectionEnum;
(function (GetDropletBandwidthMetricsDirectionEnum) {
    GetDropletBandwidthMetricsDirectionEnum["Inbound"] = "inbound";
    GetDropletBandwidthMetricsDirectionEnum["Outbound"] = "outbound";
})(GetDropletBandwidthMetricsDirectionEnum = exports.GetDropletBandwidthMetricsDirectionEnum || (exports.GetDropletBandwidthMetricsDirectionEnum = {}));
var GetDropletBandwidthMetricsInterfaceEnum;
(function (GetDropletBandwidthMetricsInterfaceEnum) {
    GetDropletBandwidthMetricsInterfaceEnum["Private"] = "private";
    GetDropletBandwidthMetricsInterfaceEnum["Public"] = "public";
})(GetDropletBandwidthMetricsInterfaceEnum = exports.GetDropletBandwidthMetricsInterfaceEnum || (exports.GetDropletBandwidthMetricsInterfaceEnum = {}));
var GetDropletBandwidthMetricsQueryParams = /** @class */ (function (_super) {
    __extends(GetDropletBandwidthMetricsQueryParams, _super);
    function GetDropletBandwidthMetricsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetDropletBandwidthMetricsQueryParams.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", String)
    ], GetDropletBandwidthMetricsQueryParams.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=host_id" }),
        __metadata("design:type", String)
    ], GetDropletBandwidthMetricsQueryParams.prototype, "hostId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=interface" }),
        __metadata("design:type", String)
    ], GetDropletBandwidthMetricsQueryParams.prototype, "interface", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", String)
    ], GetDropletBandwidthMetricsQueryParams.prototype, "start", void 0);
    return GetDropletBandwidthMetricsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDropletBandwidthMetricsQueryParams = GetDropletBandwidthMetricsQueryParams;
var GetDropletBandwidthMetrics200ApplicationJsonDataResult = /** @class */ (function (_super) {
    __extends(GetDropletBandwidthMetrics200ApplicationJsonDataResult, _super);
    function GetDropletBandwidthMetrics200ApplicationJsonDataResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metric" }),
        __metadata("design:type", Object)
    ], GetDropletBandwidthMetrics200ApplicationJsonDataResult.prototype, "metric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=values" }),
        __metadata("design:type", Array)
    ], GetDropletBandwidthMetrics200ApplicationJsonDataResult.prototype, "values", void 0);
    return GetDropletBandwidthMetrics200ApplicationJsonDataResult;
}(utils_1.SpeakeasyBase));
exports.GetDropletBandwidthMetrics200ApplicationJsonDataResult = GetDropletBandwidthMetrics200ApplicationJsonDataResult;
var GetDropletBandwidthMetrics200ApplicationJsonDataResultTypeEnum;
(function (GetDropletBandwidthMetrics200ApplicationJsonDataResultTypeEnum) {
    GetDropletBandwidthMetrics200ApplicationJsonDataResultTypeEnum["Matrix"] = "matrix";
})(GetDropletBandwidthMetrics200ApplicationJsonDataResultTypeEnum = exports.GetDropletBandwidthMetrics200ApplicationJsonDataResultTypeEnum || (exports.GetDropletBandwidthMetrics200ApplicationJsonDataResultTypeEnum = {}));
var GetDropletBandwidthMetrics200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetDropletBandwidthMetrics200ApplicationJsonData, _super);
    function GetDropletBandwidthMetrics200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result", elemType: GetDropletBandwidthMetrics200ApplicationJsonDataResult }),
        __metadata("design:type", Array)
    ], GetDropletBandwidthMetrics200ApplicationJsonData.prototype, "result", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resultType" }),
        __metadata("design:type", String)
    ], GetDropletBandwidthMetrics200ApplicationJsonData.prototype, "resultType", void 0);
    return GetDropletBandwidthMetrics200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.GetDropletBandwidthMetrics200ApplicationJsonData = GetDropletBandwidthMetrics200ApplicationJsonData;
var GetDropletBandwidthMetrics200ApplicationJsonStatusEnum;
(function (GetDropletBandwidthMetrics200ApplicationJsonStatusEnum) {
    GetDropletBandwidthMetrics200ApplicationJsonStatusEnum["Success"] = "success";
    GetDropletBandwidthMetrics200ApplicationJsonStatusEnum["Error"] = "error";
})(GetDropletBandwidthMetrics200ApplicationJsonStatusEnum = exports.GetDropletBandwidthMetrics200ApplicationJsonStatusEnum || (exports.GetDropletBandwidthMetrics200ApplicationJsonStatusEnum = {}));
var GetDropletBandwidthMetrics200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDropletBandwidthMetrics200ApplicationJson, _super);
    function GetDropletBandwidthMetrics200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", GetDropletBandwidthMetrics200ApplicationJsonData)
    ], GetDropletBandwidthMetrics200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetDropletBandwidthMetrics200ApplicationJson.prototype, "status", void 0);
    return GetDropletBandwidthMetrics200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetDropletBandwidthMetrics200ApplicationJson = GetDropletBandwidthMetrics200ApplicationJson;
var GetDropletBandwidthMetrics401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDropletBandwidthMetrics401ApplicationJson, _super);
    function GetDropletBandwidthMetrics401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetDropletBandwidthMetrics401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDropletBandwidthMetrics401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetDropletBandwidthMetrics401ApplicationJson.prototype, "requestId", void 0);
    return GetDropletBandwidthMetrics401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetDropletBandwidthMetrics401ApplicationJson = GetDropletBandwidthMetrics401ApplicationJson;
var GetDropletBandwidthMetricsRequest = /** @class */ (function (_super) {
    __extends(GetDropletBandwidthMetricsRequest, _super);
    function GetDropletBandwidthMetricsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletBandwidthMetricsQueryParams)
    ], GetDropletBandwidthMetricsRequest.prototype, "queryParams", void 0);
    return GetDropletBandwidthMetricsRequest;
}(utils_1.SpeakeasyBase));
exports.GetDropletBandwidthMetricsRequest = GetDropletBandwidthMetricsRequest;
var GetDropletBandwidthMetricsResponse = /** @class */ (function (_super) {
    __extends(GetDropletBandwidthMetricsResponse, _super);
    function GetDropletBandwidthMetricsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDropletBandwidthMetricsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetDropletBandwidthMetricsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDropletBandwidthMetricsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletBandwidthMetrics200ApplicationJson)
    ], GetDropletBandwidthMetricsResponse.prototype, "getDropletBandwidthMetrics200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletBandwidthMetrics401ApplicationJson)
    ], GetDropletBandwidthMetricsResponse.prototype, "getDropletBandwidthMetrics401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], GetDropletBandwidthMetricsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return GetDropletBandwidthMetricsResponse;
}(utils_1.SpeakeasyBase));
exports.GetDropletBandwidthMetricsResponse = GetDropletBandwidthMetricsResponse;
