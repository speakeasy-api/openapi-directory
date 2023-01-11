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
exports.ConsentFormsUpdateResponse = exports.ConsentFormsUpdateRequest = exports.ConsentFormsUpdateSecurity = exports.ConsentFormsUpdateQueryParams = exports.ConsentFormsUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ConsentFormsUpdatePathParams = /** @class */ (function (_super) {
    __extends(ConsentFormsUpdatePathParams, _super);
    function ConsentFormsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ConsentFormsUpdatePathParams.prototype, "id", void 0);
    return ConsentFormsUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.ConsentFormsUpdatePathParams = ConsentFormsUpdatePathParams;
var ConsentFormsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(ConsentFormsUpdateQueryParams, _super);
    function ConsentFormsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=doctor" }),
        __metadata("design:type", Number)
    ], ConsentFormsUpdateQueryParams.prototype, "doctor", void 0);
    return ConsentFormsUpdateQueryParams;
}(utils_1.SpeakeasyBase));
exports.ConsentFormsUpdateQueryParams = ConsentFormsUpdateQueryParams;
var ConsentFormsUpdateSecurity = /** @class */ (function (_super) {
    __extends(ConsentFormsUpdateSecurity, _super);
    function ConsentFormsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeDrchronoOauth2)
    ], ConsentFormsUpdateSecurity.prototype, "drchronoOauth2", void 0);
    return ConsentFormsUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.ConsentFormsUpdateSecurity = ConsentFormsUpdateSecurity;
var ConsentFormsUpdateRequest = /** @class */ (function (_super) {
    __extends(ConsentFormsUpdateRequest, _super);
    function ConsentFormsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ConsentFormsUpdatePathParams)
    ], ConsentFormsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ConsentFormsUpdateQueryParams)
    ], ConsentFormsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ConsentFormsUpdateSecurity)
    ], ConsentFormsUpdateRequest.prototype, "security", void 0);
    return ConsentFormsUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.ConsentFormsUpdateRequest = ConsentFormsUpdateRequest;
var ConsentFormsUpdateResponse = /** @class */ (function (_super) {
    __extends(ConsentFormsUpdateResponse, _super);
    function ConsentFormsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ConsentFormsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ConsentFormsUpdateResponse.prototype, "statusCode", void 0);
    return ConsentFormsUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.ConsentFormsUpdateResponse = ConsentFormsUpdateResponse;
