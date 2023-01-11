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
exports.GetDropletLoad15MetricsResponse = exports.GetDropletLoad15MetricsRequest = exports.GetDropletLoad15Metrics401ApplicationJson = exports.GetDropletLoad15Metrics200ApplicationJson = exports.GetDropletLoad15Metrics200ApplicationJsonStatusEnum = exports.GetDropletLoad15Metrics200ApplicationJsonData = exports.GetDropletLoad15Metrics200ApplicationJsonDataResultTypeEnum = exports.GetDropletLoad15Metrics200ApplicationJsonDataResult = exports.GetDropletLoad15MetricsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetDropletLoad15MetricsQueryParams = /** @class */ (function (_super) {
    __extends(GetDropletLoad15MetricsQueryParams, _super);
    function GetDropletLoad15MetricsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", String)
    ], GetDropletLoad15MetricsQueryParams.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=host_id" }),
        __metadata("design:type", String)
    ], GetDropletLoad15MetricsQueryParams.prototype, "hostId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", String)
    ], GetDropletLoad15MetricsQueryParams.prototype, "start", void 0);
    return GetDropletLoad15MetricsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDropletLoad15MetricsQueryParams = GetDropletLoad15MetricsQueryParams;
var GetDropletLoad15Metrics200ApplicationJsonDataResult = /** @class */ (function (_super) {
    __extends(GetDropletLoad15Metrics200ApplicationJsonDataResult, _super);
    function GetDropletLoad15Metrics200ApplicationJsonDataResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metric" }),
        __metadata("design:type", Object)
    ], GetDropletLoad15Metrics200ApplicationJsonDataResult.prototype, "metric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=values" }),
        __metadata("design:type", Array)
    ], GetDropletLoad15Metrics200ApplicationJsonDataResult.prototype, "values", void 0);
    return GetDropletLoad15Metrics200ApplicationJsonDataResult;
}(utils_1.SpeakeasyBase));
exports.GetDropletLoad15Metrics200ApplicationJsonDataResult = GetDropletLoad15Metrics200ApplicationJsonDataResult;
var GetDropletLoad15Metrics200ApplicationJsonDataResultTypeEnum;
(function (GetDropletLoad15Metrics200ApplicationJsonDataResultTypeEnum) {
    GetDropletLoad15Metrics200ApplicationJsonDataResultTypeEnum["Matrix"] = "matrix";
})(GetDropletLoad15Metrics200ApplicationJsonDataResultTypeEnum = exports.GetDropletLoad15Metrics200ApplicationJsonDataResultTypeEnum || (exports.GetDropletLoad15Metrics200ApplicationJsonDataResultTypeEnum = {}));
var GetDropletLoad15Metrics200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetDropletLoad15Metrics200ApplicationJsonData, _super);
    function GetDropletLoad15Metrics200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result", elemType: GetDropletLoad15Metrics200ApplicationJsonDataResult }),
        __metadata("design:type", Array)
    ], GetDropletLoad15Metrics200ApplicationJsonData.prototype, "result", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resultType" }),
        __metadata("design:type", String)
    ], GetDropletLoad15Metrics200ApplicationJsonData.prototype, "resultType", void 0);
    return GetDropletLoad15Metrics200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.GetDropletLoad15Metrics200ApplicationJsonData = GetDropletLoad15Metrics200ApplicationJsonData;
var GetDropletLoad15Metrics200ApplicationJsonStatusEnum;
(function (GetDropletLoad15Metrics200ApplicationJsonStatusEnum) {
    GetDropletLoad15Metrics200ApplicationJsonStatusEnum["Success"] = "success";
    GetDropletLoad15Metrics200ApplicationJsonStatusEnum["Error"] = "error";
})(GetDropletLoad15Metrics200ApplicationJsonStatusEnum = exports.GetDropletLoad15Metrics200ApplicationJsonStatusEnum || (exports.GetDropletLoad15Metrics200ApplicationJsonStatusEnum = {}));
var GetDropletLoad15Metrics200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDropletLoad15Metrics200ApplicationJson, _super);
    function GetDropletLoad15Metrics200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", GetDropletLoad15Metrics200ApplicationJsonData)
    ], GetDropletLoad15Metrics200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetDropletLoad15Metrics200ApplicationJson.prototype, "status", void 0);
    return GetDropletLoad15Metrics200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetDropletLoad15Metrics200ApplicationJson = GetDropletLoad15Metrics200ApplicationJson;
var GetDropletLoad15Metrics401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDropletLoad15Metrics401ApplicationJson, _super);
    function GetDropletLoad15Metrics401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetDropletLoad15Metrics401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDropletLoad15Metrics401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetDropletLoad15Metrics401ApplicationJson.prototype, "requestId", void 0);
    return GetDropletLoad15Metrics401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetDropletLoad15Metrics401ApplicationJson = GetDropletLoad15Metrics401ApplicationJson;
var GetDropletLoad15MetricsRequest = /** @class */ (function (_super) {
    __extends(GetDropletLoad15MetricsRequest, _super);
    function GetDropletLoad15MetricsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletLoad15MetricsQueryParams)
    ], GetDropletLoad15MetricsRequest.prototype, "queryParams", void 0);
    return GetDropletLoad15MetricsRequest;
}(utils_1.SpeakeasyBase));
exports.GetDropletLoad15MetricsRequest = GetDropletLoad15MetricsRequest;
var GetDropletLoad15MetricsResponse = /** @class */ (function (_super) {
    __extends(GetDropletLoad15MetricsResponse, _super);
    function GetDropletLoad15MetricsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDropletLoad15MetricsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetDropletLoad15MetricsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDropletLoad15MetricsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletLoad15Metrics200ApplicationJson)
    ], GetDropletLoad15MetricsResponse.prototype, "getDropletLoad15Metrics200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDropletLoad15Metrics401ApplicationJson)
    ], GetDropletLoad15MetricsResponse.prototype, "getDropletLoad15Metrics401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], GetDropletLoad15MetricsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return GetDropletLoad15MetricsResponse;
}(utils_1.SpeakeasyBase));
exports.GetDropletLoad15MetricsResponse = GetDropletLoad15MetricsResponse;
