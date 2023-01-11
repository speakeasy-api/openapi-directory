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
exports.GetSearchAspectIdFullsearchResponse = exports.GetSearchAspectIdFullsearchRequest = exports.GetSearchAspectIdFullsearchQueryParams = exports.GetSearchAspectIdFullsearchPathParams = exports.GetSearchAspectIdFullsearchAspectIdEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetSearchAspectIdFullsearchAspectIdEnum;
(function (GetSearchAspectIdFullsearchAspectIdEnum) {
    GetSearchAspectIdFullsearchAspectIdEnum["Complete"] = "complete";
    GetSearchAspectIdFullsearchAspectIdEnum["Corpreg"] = "corpreg";
    GetSearchAspectIdFullsearchAspectIdEnum["Bcgaz1"] = "bcgaz1";
    GetSearchAspectIdFullsearchAspectIdEnum["Bcgaz2"] = "bcgaz2";
    GetSearchAspectIdFullsearchAspectIdEnum["Oic"] = "oic";
    GetSearchAspectIdFullsearchAspectIdEnum["Psl"] = "psl";
    GetSearchAspectIdFullsearchAspectIdEnum["Ecb"] = "ecb";
    GetSearchAspectIdFullsearchAspectIdEnum["Hscr"] = "hscr";
    GetSearchAspectIdFullsearchAspectIdEnum["ArchOic"] = "arch_oic";
})(GetSearchAspectIdFullsearchAspectIdEnum = exports.GetSearchAspectIdFullsearchAspectIdEnum || (exports.GetSearchAspectIdFullsearchAspectIdEnum = {}));
var GetSearchAspectIdFullsearchPathParams = /** @class */ (function (_super) {
    __extends(GetSearchAspectIdFullsearchPathParams, _super);
    function GetSearchAspectIdFullsearchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=aspectId" }),
        __metadata("design:type", String)
    ], GetSearchAspectIdFullsearchPathParams.prototype, "aspectId", void 0);
    return GetSearchAspectIdFullsearchPathParams;
}(utils_1.SpeakeasyBase));
exports.GetSearchAspectIdFullsearchPathParams = GetSearchAspectIdFullsearchPathParams;
var GetSearchAspectIdFullsearchQueryParams = /** @class */ (function (_super) {
    __extends(GetSearchAspectIdFullsearchQueryParams, _super);
    function GetSearchAspectIdFullsearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=e" }),
        __metadata("design:type", Number)
    ], GetSearchAspectIdFullsearchQueryParams.prototype, "e", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lFrag" }),
        __metadata("design:type", Number)
    ], GetSearchAspectIdFullsearchQueryParams.prototype, "lFrag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=nFrag" }),
        __metadata("design:type", Number)
    ], GetSearchAspectIdFullsearchQueryParams.prototype, "nFrag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetSearchAspectIdFullsearchQueryParams.prototype, "q", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=s" }),
        __metadata("design:type", String)
    ], GetSearchAspectIdFullsearchQueryParams.prototype, "s", void 0);
    return GetSearchAspectIdFullsearchQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetSearchAspectIdFullsearchQueryParams = GetSearchAspectIdFullsearchQueryParams;
var GetSearchAspectIdFullsearchRequest = /** @class */ (function (_super) {
    __extends(GetSearchAspectIdFullsearchRequest, _super);
    function GetSearchAspectIdFullsearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSearchAspectIdFullsearchPathParams)
    ], GetSearchAspectIdFullsearchRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSearchAspectIdFullsearchQueryParams)
    ], GetSearchAspectIdFullsearchRequest.prototype, "queryParams", void 0);
    return GetSearchAspectIdFullsearchRequest;
}(utils_1.SpeakeasyBase));
exports.GetSearchAspectIdFullsearchRequest = GetSearchAspectIdFullsearchRequest;
var GetSearchAspectIdFullsearchResponse = /** @class */ (function (_super) {
    __extends(GetSearchAspectIdFullsearchResponse, _super);
    function GetSearchAspectIdFullsearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSearchAspectIdFullsearchResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSearchAspectIdFullsearchResponse.prototype, "statusCode", void 0);
    return GetSearchAspectIdFullsearchResponse;
}(utils_1.SpeakeasyBase));
exports.GetSearchAspectIdFullsearchResponse = GetSearchAspectIdFullsearchResponse;
