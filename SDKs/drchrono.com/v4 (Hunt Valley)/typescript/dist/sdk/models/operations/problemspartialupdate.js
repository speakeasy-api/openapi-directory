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
exports.ProblemsPartialUpdateResponse = exports.ProblemsPartialUpdateRequest = exports.ProblemsPartialUpdateSecurity = exports.ProblemsPartialUpdateQueryParams = exports.ProblemsPartialUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ProblemsPartialUpdatePathParams = /** @class */ (function (_super) {
    __extends(ProblemsPartialUpdatePathParams, _super);
    function ProblemsPartialUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ProblemsPartialUpdatePathParams.prototype, "id", void 0);
    return ProblemsPartialUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.ProblemsPartialUpdatePathParams = ProblemsPartialUpdatePathParams;
var ProblemsPartialUpdateQueryParams = /** @class */ (function (_super) {
    __extends(ProblemsPartialUpdateQueryParams, _super);
    function ProblemsPartialUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=doctor" }),
        __metadata("design:type", Number)
    ], ProblemsPartialUpdateQueryParams.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=patient" }),
        __metadata("design:type", Number)
    ], ProblemsPartialUpdateQueryParams.prototype, "patient", void 0);
    return ProblemsPartialUpdateQueryParams;
}(utils_1.SpeakeasyBase));
exports.ProblemsPartialUpdateQueryParams = ProblemsPartialUpdateQueryParams;
var ProblemsPartialUpdateSecurity = /** @class */ (function (_super) {
    __extends(ProblemsPartialUpdateSecurity, _super);
    function ProblemsPartialUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeDrchronoOauth2)
    ], ProblemsPartialUpdateSecurity.prototype, "drchronoOauth2", void 0);
    return ProblemsPartialUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.ProblemsPartialUpdateSecurity = ProblemsPartialUpdateSecurity;
var ProblemsPartialUpdateRequest = /** @class */ (function (_super) {
    __extends(ProblemsPartialUpdateRequest, _super);
    function ProblemsPartialUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ProblemsPartialUpdatePathParams)
    ], ProblemsPartialUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ProblemsPartialUpdateQueryParams)
    ], ProblemsPartialUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ProblemsPartialUpdateSecurity)
    ], ProblemsPartialUpdateRequest.prototype, "security", void 0);
    return ProblemsPartialUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.ProblemsPartialUpdateRequest = ProblemsPartialUpdateRequest;
var ProblemsPartialUpdateResponse = /** @class */ (function (_super) {
    __extends(ProblemsPartialUpdateResponse, _super);
    function ProblemsPartialUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ProblemsPartialUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ProblemsPartialUpdateResponse.prototype, "statusCode", void 0);
    return ProblemsPartialUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.ProblemsPartialUpdateResponse = ProblemsPartialUpdateResponse;
