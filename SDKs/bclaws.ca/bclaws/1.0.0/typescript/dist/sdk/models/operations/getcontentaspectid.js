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
exports.GetContentAspectIdResponse = exports.GetContentAspectIdRequest = exports.GetContentAspectIdPathParams = exports.GetContentAspectIdAspectIdEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetContentAspectIdAspectIdEnum;
(function (GetContentAspectIdAspectIdEnum) {
    GetContentAspectIdAspectIdEnum["Complete"] = "complete";
    GetContentAspectIdAspectIdEnum["Corpreg"] = "corpreg";
    GetContentAspectIdAspectIdEnum["Bcgaz1"] = "bcgaz1";
    GetContentAspectIdAspectIdEnum["Bcgaz2"] = "bcgaz2";
    GetContentAspectIdAspectIdEnum["Oic"] = "oic";
    GetContentAspectIdAspectIdEnum["Psl"] = "psl";
    GetContentAspectIdAspectIdEnum["Ecb"] = "ecb";
    GetContentAspectIdAspectIdEnum["Hscr"] = "hscr";
    GetContentAspectIdAspectIdEnum["ArchOic"] = "arch_oic";
})(GetContentAspectIdAspectIdEnum = exports.GetContentAspectIdAspectIdEnum || (exports.GetContentAspectIdAspectIdEnum = {}));
var GetContentAspectIdPathParams = /** @class */ (function (_super) {
    __extends(GetContentAspectIdPathParams, _super);
    function GetContentAspectIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=aspectId" }),
        __metadata("design:type", String)
    ], GetContentAspectIdPathParams.prototype, "aspectId", void 0);
    return GetContentAspectIdPathParams;
}(utils_1.SpeakeasyBase));
exports.GetContentAspectIdPathParams = GetContentAspectIdPathParams;
var GetContentAspectIdRequest = /** @class */ (function (_super) {
    __extends(GetContentAspectIdRequest, _super);
    function GetContentAspectIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetContentAspectIdPathParams)
    ], GetContentAspectIdRequest.prototype, "pathParams", void 0);
    return GetContentAspectIdRequest;
}(utils_1.SpeakeasyBase));
exports.GetContentAspectIdRequest = GetContentAspectIdRequest;
var GetContentAspectIdResponse = /** @class */ (function (_super) {
    __extends(GetContentAspectIdResponse, _super);
    function GetContentAspectIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetContentAspectIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetContentAspectIdResponse.prototype, "statusCode", void 0);
    return GetContentAspectIdResponse;
}(utils_1.SpeakeasyBase));
exports.GetContentAspectIdResponse = GetContentAspectIdResponse;
