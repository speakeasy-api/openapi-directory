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
exports.GetDropletLoad5MetricsResponse = exports.GetDropletLoad5MetricsRequest = exports.GetDropletLoad5Metrics401ApplicationJson = exports.GetDropletLoad5Metrics200ApplicationJson = exports.GetDropletLoad5Metrics200ApplicationJsonStatusEnum = exports.GetDropletLoad5Metrics200ApplicationJsonData = exports.GetDropletLoad5Metrics200ApplicationJsonDataResultTypeEnum = exports.GetDropletLoad5Metrics200ApplicationJsonDataResult = exports.GetDropletLoad5MetricsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetDropletLoad5MetricsQueryParams = /** @class */ (function (_super) {
    __extends(GetDropletLoad5MetricsQueryParams, _super);
    function GetDropletLoad5MetricsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", String)
    ], GetDropletLoad5MetricsQueryParams.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=host_id" }),
        __metadata("design:type", String)
    ], GetDropletLoad5MetricsQueryParams.prototype, "hostId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", String)
    ], GetDropletLoad5MetricsQueryParams.prototype, "start", void 0);
    return GetDropletLoad5MetricsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDropletLoad5MetricsQueryParams = GetDropletLoad5MetricsQueryParams;
var GetDropletLoad5Metrics200ApplicationJsonDataResult = /** @class */ (function (_super) {
    __extends(GetDropletLoad5Metrics200ApplicationJsonDataResult, _super);
    function GetDropletLoad5Metrics200ApplicationJsonDataResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metric" }),
        __metadata("design:type", Object)
    ], GetDropletLoad5Metrics200ApplicationJsonDataResult.prototype, "metric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=values" }),
        __metadata("design:type", Array)
    ], GetDropletLoad5Metrics200ApplicationJsonDataResult.prototype, "values", void 0);
    return GetDropletLoad5Metrics200ApplicationJsonDataResult;
}(utils_1.SpeakeasyBase));
exports.GetDropletLoad5Metrics200ApplicationJsonDataResult = GetDropletLoad5Metrics200ApplicationJsonDataResult;
var GetDropletLoad5Metrics200ApplicationJsonDataResultTypeEnum;
(function (GetDropletLoad5Metrics200ApplicationJsonDataResultTypeEnum) {
    GetDropletLoad5Metrics200ApplicationJsonDataResultTypeEnum["Matrix"] = "matrix";
})(GetDropletLoad5Metrics200ApplicationJsonDataResultTypeEnum = exports.GetDropletLoad5Metrics200ApplicationJsonDataResultTypeEnum || (exports.GetDropletLoad5Metrics200ApplicationJsonDataResultTypeEnum = {}));
var GetDropletLoad5Metrics200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetDropletLoad5Metrics200ApplicationJsonData, _super);
    function GetDropletLoad5Metrics200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result", elemType: GetDropletLoad5Metrics200ApplicationJsonDataResult }),
        __metadata("design:type", Array)
    ], GetDropletLoad5Metrics200ApplicationJsonData.prototype, "result", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resultType" }),
        __metadata("design:type", String)
    ], GetDropletLoad5Metrics200ApplicationJsonData.prototype, "resultType", void 0);
    return GetDropletLoad5Metrics200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.GetDropletLoad5Metrics200ApplicationJsonData = GetDropletLoad5Metrics200ApplicationJsonData;
var GetDropletLoad5Metrics200ApplicationJsonStatusEnum;
(function (GetDropletLoad5Metrics200ApplicationJsonStatusEnum) {
    GetDropletLoad5Metrics200ApplicationJsonStatusEnum["Success"] = "success";
    GetDropletLoad5Metrics200ApplicationJsonStatusEnum["Error"] = "error";
})(GetDropletLoad5Metrics200ApplicationJsonStatusEnum = exports.GetDropletLoad5Metrics200ApplicationJsonStatusEnum || (exports.GetDropletLoad5Metrics200ApplicationJsonStatusEnum = {}));
var GetDropletLoad5Metrics200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDropletLoad5Metrics200ApplicationJson, _super);
    function GetDropletLoad5Metrics200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", GetDropletLoad5Metrics200ApplicationJsonData)
    ], GetDropletLoad5Metrics200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetDropletLoad5Metrics200ApplicationJson.prototype, "status", void 0);
    return GetDropletLoad5Metrics200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetDropletLoad5Metrics200ApplicationJson = GetDropletLoad5Metrics200ApplicationJson;
var GetDropletLoad5Metrics401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDropletLoad5Metrics401ApplicationJson, _super);
    function GetDropletLoad5Metrics401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetDropletLoad5Metrics401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDropletLoad5Metrics401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetDropletLoad5Metrics401ApplicationJson.prototype, "requestId", void 0);
    return GetDropletLoad5Metrics401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetDropletLoad5Metrics401ApplicationJson = GetDropletLoad5Metrics401ApplicationJson;
var GetDropletLoad5MetricsRequest = /** @class */ (function (_super) {
    __extends(GetDropletLoad5MetricsRequest, _super);
    function GetDropletLoad5MetricsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletLoad5MetricsQueryParams)
    ], GetDropletLoad5MetricsRequest.prototype, "queryParams", void 0);
    return GetDropletLoad5MetricsRequest;
}(utils_1.SpeakeasyBase));
exports.GetDropletLoad5MetricsRequest = GetDropletLoad5MetricsRequest;
var GetDropletLoad5MetricsResponse = /** @class */ (function (_super) {
    __extends(GetDropletLoad5MetricsResponse, _super);
    function GetDropletLoad5MetricsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDropletLoad5MetricsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetDropletLoad5MetricsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDropletLoad5MetricsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletLoad5Metrics200ApplicationJson)
    ], GetDropletLoad5MetricsResponse.prototype, "getDropletLoad5Metrics200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletLoad5Metrics401ApplicationJson)
    ], GetDropletLoad5MetricsResponse.prototype, "getDropletLoad5Metrics401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], GetDropletLoad5MetricsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return GetDropletLoad5MetricsResponse;
}(utils_1.SpeakeasyBase));
exports.GetDropletLoad5MetricsResponse = GetDropletLoad5MetricsResponse;
