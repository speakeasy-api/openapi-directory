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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetQueryResponse = exports.GetQueryRequest = exports.GetQueryQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetQueryQueryParams = /** @class */ (function (_super) {
    __extends(GetQueryQueryParams, _super);
    function GetQueryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=1_property" }),
        __metadata("design:type", String)
    ], GetQueryQueryParams.prototype, "oneProperty", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=1_property.value" }),
        __metadata("design:type", String)
    ], GetQueryQueryParams.prototype, "onePropertyValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=p.limit" }),
        __metadata("design:type", Number)
    ], GetQueryQueryParams.prototype, "pLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=path" }),
        __metadata("design:type", String)
    ], GetQueryQueryParams.prototype, "path", void 0);
    return GetQueryQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetQueryQueryParams = GetQueryQueryParams;
var GetQueryRequest = /** @class */ (function (_super) {
    __extends(GetQueryRequest, _super);
    function GetQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetQueryQueryParams)
    ], GetQueryRequest.prototype, "queryParams", void 0);
    return GetQueryRequest;
}(utils_1.SpeakeasyBase));
exports.GetQueryRequest = GetQueryRequest;
var GetQueryResponse = /** @class */ (function (_super) {
    __extends(GetQueryResponse, _super);
    function GetQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetQueryResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetQueryResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetQueryResponse.prototype, "getQueryDefaultApplicationJSONString", void 0);
    return GetQueryResponse;
}(utils_1.SpeakeasyBase));
exports.GetQueryResponse = GetQueryResponse;
