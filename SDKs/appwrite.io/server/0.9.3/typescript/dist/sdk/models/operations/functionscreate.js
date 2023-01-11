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
exports.FunctionsCreateResponse = exports.FunctionsCreateRequest = exports.FunctionsCreateSecurity = exports.FunctionsCreateRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var FunctionsCreateRequestBody = /** @class */ (function (_super) {
    __extends(FunctionsCreateRequestBody, _super);
    function FunctionsCreateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=events" }),
        __metadata("design:type", Array)
    ], FunctionsCreateRequestBody.prototype, "events", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=execute" }),
        __metadata("design:type", Array)
    ], FunctionsCreateRequestBody.prototype, "execute", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FunctionsCreateRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=runtime" }),
        __metadata("design:type", String)
    ], FunctionsCreateRequestBody.prototype, "runtime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedule" }),
        __metadata("design:type", String)
    ], FunctionsCreateRequestBody.prototype, "schedule", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timeout" }),
        __metadata("design:type", Number)
    ], FunctionsCreateRequestBody.prototype, "timeout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vars" }),
        __metadata("design:type", Object)
    ], FunctionsCreateRequestBody.prototype, "vars", void 0);
    return FunctionsCreateRequestBody;
}(utils_1.SpeakeasyBase));
exports.FunctionsCreateRequestBody = FunctionsCreateRequestBody;
var FunctionsCreateSecurity = /** @class */ (function (_super) {
    __extends(FunctionsCreateSecurity, _super);
    function FunctionsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey)
    ], FunctionsCreateSecurity.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], FunctionsCreateSecurity.prototype, "project", void 0);
    return FunctionsCreateSecurity;
}(utils_1.SpeakeasyBase));
exports.FunctionsCreateSecurity = FunctionsCreateSecurity;
var FunctionsCreateRequest = /** @class */ (function (_super) {
    __extends(FunctionsCreateRequest, _super);
    function FunctionsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", FunctionsCreateRequestBody)
    ], FunctionsCreateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FunctionsCreateSecurity)
    ], FunctionsCreateRequest.prototype, "security", void 0);
    return FunctionsCreateRequest;
}(utils_1.SpeakeasyBase));
exports.FunctionsCreateRequest = FunctionsCreateRequest;
var FunctionsCreateResponse = /** @class */ (function (_super) {
    __extends(FunctionsCreateResponse, _super);
    function FunctionsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FunctionsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FunctionsCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Function)
    ], FunctionsCreateResponse.prototype, "function", void 0);
    return FunctionsCreateResponse;
}(utils_1.SpeakeasyBase));
exports.FunctionsCreateResponse = FunctionsCreateResponse;
