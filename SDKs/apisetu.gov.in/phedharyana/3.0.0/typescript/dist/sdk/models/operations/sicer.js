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
exports.SicerResponse = exports.SicerRequest = exports.Sicer504ApplicationJson = exports.Sicer504ApplicationJsonErrorDescriptionEnum = exports.Sicer504ApplicationJsonErrorEnum = exports.Sicer503ApplicationJson = exports.Sicer503ApplicationJsonErrorDescriptionEnum = exports.Sicer503ApplicationJsonErrorEnum = exports.Sicer502ApplicationJson = exports.Sicer502ApplicationJsonErrorDescriptionEnum = exports.Sicer502ApplicationJsonErrorEnum = exports.Sicer500ApplicationJson = exports.Sicer500ApplicationJsonErrorDescriptionEnum = exports.Sicer500ApplicationJsonErrorEnum = exports.Sicer404ApplicationJson = exports.Sicer404ApplicationJsonErrorDescriptionEnum = exports.Sicer404ApplicationJsonErrorEnum = exports.Sicer401ApplicationJson = exports.Sicer401ApplicationJsonErrorDescriptionEnum = exports.Sicer401ApplicationJsonErrorEnum = exports.Sicer400ApplicationJson = exports.Sicer400ApplicationJsonErrorDescriptionEnum = exports.Sicer400ApplicationJsonErrorEnum = exports.SicerSecurity = exports.SicerRequestBody = exports.SicerRequestBodyFormatEnum = exports.SicerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SicerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(SicerRequestBodyCertificateParameters, _super);
    function SicerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_name" }),
        __metadata("design:type", String)
    ], SicerRequestBodyCertificateParameters.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consumer_id" }),
        __metadata("design:type", String)
    ], SicerRequestBodyCertificateParameters.prototype, "consumerId", void 0);
    return SicerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.SicerRequestBodyCertificateParameters = SicerRequestBodyCertificateParameters;
var SicerRequestBodyFormatEnum;
(function (SicerRequestBodyFormatEnum) {
    SicerRequestBodyFormatEnum["Pdf"] = "pdf";
})(SicerRequestBodyFormatEnum = exports.SicerRequestBodyFormatEnum || (exports.SicerRequestBodyFormatEnum = {}));
var SicerRequestBody = /** @class */ (function (_super) {
    __extends(SicerRequestBody, _super);
    function SicerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", SicerRequestBodyCertificateParameters)
    ], SicerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], SicerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], SicerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], SicerRequestBody.prototype, "txnId", void 0);
    return SicerRequestBody;
}(utils_1.SpeakeasyBase));
exports.SicerRequestBody = SicerRequestBody;
var SicerSecurity = /** @class */ (function (_super) {
    __extends(SicerSecurity, _super);
    function SicerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SicerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], SicerSecurity.prototype, "clientId", void 0);
    return SicerSecurity;
}(utils_1.SpeakeasyBase));
exports.SicerSecurity = SicerSecurity;
var Sicer400ApplicationJsonErrorEnum;
(function (Sicer400ApplicationJsonErrorEnum) {
    Sicer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Sicer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Sicer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Sicer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Sicer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Sicer400ApplicationJsonErrorEnum = exports.Sicer400ApplicationJsonErrorEnum || (exports.Sicer400ApplicationJsonErrorEnum = {}));
var Sicer400ApplicationJsonErrorDescriptionEnum;
(function (Sicer400ApplicationJsonErrorDescriptionEnum) {
    Sicer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Sicer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Sicer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Sicer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Sicer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Sicer400ApplicationJsonErrorDescriptionEnum = exports.Sicer400ApplicationJsonErrorDescriptionEnum || (exports.Sicer400ApplicationJsonErrorDescriptionEnum = {}));
var Sicer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Sicer400ApplicationJson, _super);
    function Sicer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sicer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sicer400ApplicationJson.prototype, "errorDescription", void 0);
    return Sicer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Sicer400ApplicationJson = Sicer400ApplicationJson;
var Sicer401ApplicationJsonErrorEnum;
(function (Sicer401ApplicationJsonErrorEnum) {
    Sicer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Sicer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Sicer401ApplicationJsonErrorEnum = exports.Sicer401ApplicationJsonErrorEnum || (exports.Sicer401ApplicationJsonErrorEnum = {}));
var Sicer401ApplicationJsonErrorDescriptionEnum;
(function (Sicer401ApplicationJsonErrorDescriptionEnum) {
    Sicer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Sicer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Sicer401ApplicationJsonErrorDescriptionEnum = exports.Sicer401ApplicationJsonErrorDescriptionEnum || (exports.Sicer401ApplicationJsonErrorDescriptionEnum = {}));
var Sicer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Sicer401ApplicationJson, _super);
    function Sicer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sicer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sicer401ApplicationJson.prototype, "errorDescription", void 0);
    return Sicer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Sicer401ApplicationJson = Sicer401ApplicationJson;
var Sicer404ApplicationJsonErrorEnum;
(function (Sicer404ApplicationJsonErrorEnum) {
    Sicer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Sicer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Sicer404ApplicationJsonErrorEnum = exports.Sicer404ApplicationJsonErrorEnum || (exports.Sicer404ApplicationJsonErrorEnum = {}));
var Sicer404ApplicationJsonErrorDescriptionEnum;
(function (Sicer404ApplicationJsonErrorDescriptionEnum) {
    Sicer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Sicer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Sicer404ApplicationJsonErrorDescriptionEnum = exports.Sicer404ApplicationJsonErrorDescriptionEnum || (exports.Sicer404ApplicationJsonErrorDescriptionEnum = {}));
var Sicer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Sicer404ApplicationJson, _super);
    function Sicer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sicer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sicer404ApplicationJson.prototype, "errorDescription", void 0);
    return Sicer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Sicer404ApplicationJson = Sicer404ApplicationJson;
var Sicer500ApplicationJsonErrorEnum;
(function (Sicer500ApplicationJsonErrorEnum) {
    Sicer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Sicer500ApplicationJsonErrorEnum = exports.Sicer500ApplicationJsonErrorEnum || (exports.Sicer500ApplicationJsonErrorEnum = {}));
var Sicer500ApplicationJsonErrorDescriptionEnum;
(function (Sicer500ApplicationJsonErrorDescriptionEnum) {
    Sicer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Sicer500ApplicationJsonErrorDescriptionEnum = exports.Sicer500ApplicationJsonErrorDescriptionEnum || (exports.Sicer500ApplicationJsonErrorDescriptionEnum = {}));
var Sicer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Sicer500ApplicationJson, _super);
    function Sicer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sicer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sicer500ApplicationJson.prototype, "errorDescription", void 0);
    return Sicer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Sicer500ApplicationJson = Sicer500ApplicationJson;
var Sicer502ApplicationJsonErrorEnum;
(function (Sicer502ApplicationJsonErrorEnum) {
    Sicer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Sicer502ApplicationJsonErrorEnum = exports.Sicer502ApplicationJsonErrorEnum || (exports.Sicer502ApplicationJsonErrorEnum = {}));
var Sicer502ApplicationJsonErrorDescriptionEnum;
(function (Sicer502ApplicationJsonErrorDescriptionEnum) {
    Sicer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Sicer502ApplicationJsonErrorDescriptionEnum = exports.Sicer502ApplicationJsonErrorDescriptionEnum || (exports.Sicer502ApplicationJsonErrorDescriptionEnum = {}));
var Sicer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Sicer502ApplicationJson, _super);
    function Sicer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sicer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sicer502ApplicationJson.prototype, "errorDescription", void 0);
    return Sicer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Sicer502ApplicationJson = Sicer502ApplicationJson;
var Sicer503ApplicationJsonErrorEnum;
(function (Sicer503ApplicationJsonErrorEnum) {
    Sicer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Sicer503ApplicationJsonErrorEnum = exports.Sicer503ApplicationJsonErrorEnum || (exports.Sicer503ApplicationJsonErrorEnum = {}));
var Sicer503ApplicationJsonErrorDescriptionEnum;
(function (Sicer503ApplicationJsonErrorDescriptionEnum) {
    Sicer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Sicer503ApplicationJsonErrorDescriptionEnum = exports.Sicer503ApplicationJsonErrorDescriptionEnum || (exports.Sicer503ApplicationJsonErrorDescriptionEnum = {}));
var Sicer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Sicer503ApplicationJson, _super);
    function Sicer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sicer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sicer503ApplicationJson.prototype, "errorDescription", void 0);
    return Sicer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Sicer503ApplicationJson = Sicer503ApplicationJson;
var Sicer504ApplicationJsonErrorEnum;
(function (Sicer504ApplicationJsonErrorEnum) {
    Sicer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Sicer504ApplicationJsonErrorEnum = exports.Sicer504ApplicationJsonErrorEnum || (exports.Sicer504ApplicationJsonErrorEnum = {}));
var Sicer504ApplicationJsonErrorDescriptionEnum;
(function (Sicer504ApplicationJsonErrorDescriptionEnum) {
    Sicer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Sicer504ApplicationJsonErrorDescriptionEnum = exports.Sicer504ApplicationJsonErrorDescriptionEnum || (exports.Sicer504ApplicationJsonErrorDescriptionEnum = {}));
var Sicer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Sicer504ApplicationJson, _super);
    function Sicer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sicer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sicer504ApplicationJson.prototype, "errorDescription", void 0);
    return Sicer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Sicer504ApplicationJson = Sicer504ApplicationJson;
var SicerRequest = /** @class */ (function (_super) {
    __extends(SicerRequest, _super);
    function SicerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", SicerRequestBody)
    ], SicerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SicerSecurity)
    ], SicerRequest.prototype, "security", void 0);
    return SicerRequest;
}(utils_1.SpeakeasyBase));
exports.SicerRequest = SicerRequest;
var SicerResponse = /** @class */ (function (_super) {
    __extends(SicerResponse, _super);
    function SicerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SicerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SicerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Sicer400ApplicationJson)
    ], SicerResponse.prototype, "sicer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Sicer401ApplicationJson)
    ], SicerResponse.prototype, "sicer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Sicer404ApplicationJson)
    ], SicerResponse.prototype, "sicer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Sicer500ApplicationJson)
    ], SicerResponse.prototype, "sicer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Sicer502ApplicationJson)
    ], SicerResponse.prototype, "sicer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Sicer503ApplicationJson)
    ], SicerResponse.prototype, "sicer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Sicer504ApplicationJson)
    ], SicerResponse.prototype, "sicer504ApplicationJSONObject", void 0);
    return SicerResponse;
}(utils_1.SpeakeasyBase));
exports.SicerResponse = SicerResponse;
