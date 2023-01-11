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
exports.VatLevelTwoResponse = exports.VatLevelTwoRequest = exports.VatLevelTwoSecurity = exports.VatLevelTwoRequestBody = exports.VatLevelTwoPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var VatLevelTwoPathParams = /** @class */ (function (_super) {
    __extends(VatLevelTwoPathParams, _super);
    function VatLevelTwoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=country" }),
        __metadata("design:type", String)
    ], VatLevelTwoPathParams.prototype, "country", void 0);
    return VatLevelTwoPathParams;
}(utils_1.SpeakeasyBase));
exports.VatLevelTwoPathParams = VatLevelTwoPathParams;
var VatLevelTwoRequestBody = /** @class */ (function (_super) {
    __extends(VatLevelTwoRequestBody, _super);
    function VatLevelTwoRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=confirmation;" }),
        __metadata("design:type", Boolean)
    ], VatLevelTwoRequestBody.prototype, "confirmation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=vatNumber;" }),
        __metadata("design:type", String)
    ], VatLevelTwoRequestBody.prototype, "vatNumber", void 0);
    return VatLevelTwoRequestBody;
}(utils_1.SpeakeasyBase));
exports.VatLevelTwoRequestBody = VatLevelTwoRequestBody;
var VatLevelTwoSecurity = /** @class */ (function (_super) {
    __extends(VatLevelTwoSecurity, _super);
    function VatLevelTwoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], VatLevelTwoSecurity.prototype, "userKey", void 0);
    return VatLevelTwoSecurity;
}(utils_1.SpeakeasyBase));
exports.VatLevelTwoSecurity = VatLevelTwoSecurity;
var VatLevelTwoRequest = /** @class */ (function (_super) {
    __extends(VatLevelTwoRequest, _super);
    function VatLevelTwoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", VatLevelTwoPathParams)
    ], VatLevelTwoRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", VatLevelTwoRequestBody)
    ], VatLevelTwoRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", VatLevelTwoSecurity)
    ], VatLevelTwoRequest.prototype, "security", void 0);
    return VatLevelTwoRequest;
}(utils_1.SpeakeasyBase));
exports.VatLevelTwoRequest = VatLevelTwoRequest;
var VatLevelTwoResponse = /** @class */ (function (_super) {
    __extends(VatLevelTwoResponse, _super);
    function VatLevelTwoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], VatLevelTwoResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], VatLevelTwoResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], VatLevelTwoResponse.prototype, "vatLevelTwo200ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], VatLevelTwoResponse.prototype, "vatLevelTwoDefaultApplicationJSONAny", void 0);
    return VatLevelTwoResponse;
}(utils_1.SpeakeasyBase));
exports.VatLevelTwoResponse = VatLevelTwoResponse;
