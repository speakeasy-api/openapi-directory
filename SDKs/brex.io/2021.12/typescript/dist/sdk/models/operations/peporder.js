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
exports.PepOrderResponse = exports.PepOrderRequest = exports.PepOrderSecurity = exports.PepOrderRequestBody = exports.PepOrderPathParams = exports.PepOrderTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PepOrderTypeEnum;
(function (PepOrderTypeEnum) {
    PepOrderTypeEnum["Unknown"] = "";
    PepOrderTypeEnum["B"] = "B";
    PepOrderTypeEnum["P"] = "P";
})(PepOrderTypeEnum = exports.PepOrderTypeEnum || (exports.PepOrderTypeEnum = {}));
var PepOrderPathParams = /** @class */ (function (_super) {
    __extends(PepOrderPathParams, _super);
    function PepOrderPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=search" }),
        __metadata("design:type", String)
    ], PepOrderPathParams.prototype, "search", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=type" }),
        __metadata("design:type", String)
    ], PepOrderPathParams.prototype, "type", void 0);
    return PepOrderPathParams;
}(utils_1.SpeakeasyBase));
exports.PepOrderPathParams = PepOrderPathParams;
var PepOrderRequestBody = /** @class */ (function (_super) {
    __extends(PepOrderRequestBody, _super);
    function PepOrderRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Aliases;" }),
        __metadata("design:type", String)
    ], PepOrderRequestBody.prototype, "aliases", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Country;" }),
        __metadata("design:type", String)
    ], PepOrderRequestBody.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DOB;" }),
        __metadata("design:type", String)
    ], PepOrderRequestBody.prototype, "dob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=FamilyName;" }),
        __metadata("design:type", String)
    ], PepOrderRequestBody.prototype, "familyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Filters;" }),
        __metadata("design:type", String)
    ], PepOrderRequestBody.prototype, "filters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=GivenName;" }),
        __metadata("design:type", String)
    ], PepOrderRequestBody.prototype, "givenName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=LEI;" }),
        __metadata("design:type", String)
    ], PepOrderRequestBody.prototype, "lei", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Locale;" }),
        __metadata("design:type", String)
    ], PepOrderRequestBody.prototype, "locale", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Medialists;" }),
        __metadata("design:type", String)
    ], PepOrderRequestBody.prototype, "medialists", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=MiddleName;" }),
        __metadata("design:type", String)
    ], PepOrderRequestBody.prototype, "middleName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Monitoring;" }),
        __metadata("design:type", Boolean)
    ], PepOrderRequestBody.prototype, "monitoring", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Peplists;" }),
        __metadata("design:type", String)
    ], PepOrderRequestBody.prototype, "peplists", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Region;" }),
        __metadata("design:type", String)
    ], PepOrderRequestBody.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=SmartMatch;" }),
        __metadata("design:type", Boolean)
    ], PepOrderRequestBody.prototype, "smartMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Watchlists;" }),
        __metadata("design:type", String)
    ], PepOrderRequestBody.prototype, "watchlists", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Webhook;" }),
        __metadata("design:type", String)
    ], PepOrderRequestBody.prototype, "webhook", void 0);
    return PepOrderRequestBody;
}(utils_1.SpeakeasyBase));
exports.PepOrderRequestBody = PepOrderRequestBody;
var PepOrderSecurity = /** @class */ (function (_super) {
    __extends(PepOrderSecurity, _super);
    function PepOrderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], PepOrderSecurity.prototype, "userKey", void 0);
    return PepOrderSecurity;
}(utils_1.SpeakeasyBase));
exports.PepOrderSecurity = PepOrderSecurity;
var PepOrderRequest = /** @class */ (function (_super) {
    __extends(PepOrderRequest, _super);
    function PepOrderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PepOrderPathParams)
    ], PepOrderRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", PepOrderRequestBody)
    ], PepOrderRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PepOrderSecurity)
    ], PepOrderRequest.prototype, "security", void 0);
    return PepOrderRequest;
}(utils_1.SpeakeasyBase));
exports.PepOrderRequest = PepOrderRequest;
var PepOrderResponse = /** @class */ (function (_super) {
    __extends(PepOrderResponse, _super);
    function PepOrderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PepOrderResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PepOrderResponse.prototype, "pepOrder200ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PepOrderResponse.prototype, "pepOrderDefaultApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PepOrderResponse.prototype, "statusCode", void 0);
    return PepOrderResponse;
}(utils_1.SpeakeasyBase));
exports.PepOrderResponse = PepOrderResponse;
