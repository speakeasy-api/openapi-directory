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
exports.PatchUpdateDomainRecordResponse = exports.PatchUpdateDomainRecordRequest = exports.PatchUpdateDomainRecord401ApplicationJson = exports.PatchUpdateDomainRecordPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PatchUpdateDomainRecordPathParams = /** @class */ (function (_super) {
    __extends(PatchUpdateDomainRecordPathParams, _super);
    function PatchUpdateDomainRecordPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=domain_name" }),
        __metadata("design:type", String)
    ], PatchUpdateDomainRecordPathParams.prototype, "domainName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=domain_record_id" }),
        __metadata("design:type", Number)
    ], PatchUpdateDomainRecordPathParams.prototype, "domainRecordId", void 0);
    return PatchUpdateDomainRecordPathParams;
}(utils_1.SpeakeasyBase));
exports.PatchUpdateDomainRecordPathParams = PatchUpdateDomainRecordPathParams;
var PatchUpdateDomainRecord401ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchUpdateDomainRecord401ApplicationJson, _super);
    function PatchUpdateDomainRecord401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PatchUpdateDomainRecord401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PatchUpdateDomainRecord401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], PatchUpdateDomainRecord401ApplicationJson.prototype, "requestId", void 0);
    return PatchUpdateDomainRecord401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatchUpdateDomainRecord401ApplicationJson = PatchUpdateDomainRecord401ApplicationJson;
var PatchUpdateDomainRecordRequest = /** @class */ (function (_super) {
    __extends(PatchUpdateDomainRecordRequest, _super);
    function PatchUpdateDomainRecordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchUpdateDomainRecordPathParams)
    ], PatchUpdateDomainRecordRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Onev21domains1Percent7BdomainNamePercent7D1recordsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDomainRecordsItemsInput)
    ], PatchUpdateDomainRecordRequest.prototype, "request", void 0);
    return PatchUpdateDomainRecordRequest;
}(utils_1.SpeakeasyBase));
exports.PatchUpdateDomainRecordRequest = PatchUpdateDomainRecordRequest;
var PatchUpdateDomainRecordResponse = /** @class */ (function (_super) {
    __extends(PatchUpdateDomainRecordResponse, _super);
    function PatchUpdateDomainRecordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PatchUpdateDomainRecordResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PatchUpdateDomainRecordResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PatchUpdateDomainRecordResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PatchUpdateDomainRecordResponse.prototype, "patchUpdateDomainRecord200ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchUpdateDomainRecord401ApplicationJson)
    ], PatchUpdateDomainRecordResponse.prototype, "patchUpdateDomainRecord401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], PatchUpdateDomainRecordResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return PatchUpdateDomainRecordResponse;
}(utils_1.SpeakeasyBase));
exports.PatchUpdateDomainRecordResponse = PatchUpdateDomainRecordResponse;
