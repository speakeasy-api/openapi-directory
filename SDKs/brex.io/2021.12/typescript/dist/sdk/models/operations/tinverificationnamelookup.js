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
exports.TinVerificationNameLookupResponse = exports.TinVerificationNameLookupRequest = exports.TinVerificationNameLookupSecurity = exports.TinVerificationNameLookupQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var TinVerificationNameLookupQueryParams = /** @class */ (function (_super) {
    __extends(TinVerificationNameLookupQueryParams, _super);
    function TinVerificationNameLookupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=tin" }),
        __metadata("design:type", String)
    ], TinVerificationNameLookupQueryParams.prototype, "tin", void 0);
    return TinVerificationNameLookupQueryParams;
}(utils_1.SpeakeasyBase));
exports.TinVerificationNameLookupQueryParams = TinVerificationNameLookupQueryParams;
var TinVerificationNameLookupSecurity = /** @class */ (function (_super) {
    __extends(TinVerificationNameLookupSecurity, _super);
    function TinVerificationNameLookupSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], TinVerificationNameLookupSecurity.prototype, "userKey", void 0);
    return TinVerificationNameLookupSecurity;
}(utils_1.SpeakeasyBase));
exports.TinVerificationNameLookupSecurity = TinVerificationNameLookupSecurity;
var TinVerificationNameLookupRequest = /** @class */ (function (_super) {
    __extends(TinVerificationNameLookupRequest, _super);
    function TinVerificationNameLookupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TinVerificationNameLookupQueryParams)
    ], TinVerificationNameLookupRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TinVerificationNameLookupSecurity)
    ], TinVerificationNameLookupRequest.prototype, "security", void 0);
    return TinVerificationNameLookupRequest;
}(utils_1.SpeakeasyBase));
exports.TinVerificationNameLookupRequest = TinVerificationNameLookupRequest;
var TinVerificationNameLookupResponse = /** @class */ (function (_super) {
    __extends(TinVerificationNameLookupResponse, _super);
    function TinVerificationNameLookupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TinVerificationNameLookupResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TinVerificationNameLookupResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], TinVerificationNameLookupResponse.prototype, "tinVerificationNameLookup200ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], TinVerificationNameLookupResponse.prototype, "tinVerificationNameLookupDefaultApplicationJSONAny", void 0);
    return TinVerificationNameLookupResponse;
}(utils_1.SpeakeasyBase));
exports.TinVerificationNameLookupResponse = TinVerificationNameLookupResponse;
