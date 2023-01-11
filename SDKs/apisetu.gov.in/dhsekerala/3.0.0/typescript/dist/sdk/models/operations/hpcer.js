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
exports.HpcerResponse = exports.HpcerRequest = exports.Hpcer504ApplicationJson = exports.Hpcer504ApplicationJsonErrorDescriptionEnum = exports.Hpcer504ApplicationJsonErrorEnum = exports.Hpcer503ApplicationJson = exports.Hpcer503ApplicationJsonErrorDescriptionEnum = exports.Hpcer503ApplicationJsonErrorEnum = exports.Hpcer502ApplicationJson = exports.Hpcer502ApplicationJsonErrorDescriptionEnum = exports.Hpcer502ApplicationJsonErrorEnum = exports.Hpcer500ApplicationJson = exports.Hpcer500ApplicationJsonErrorDescriptionEnum = exports.Hpcer500ApplicationJsonErrorEnum = exports.Hpcer404ApplicationJson = exports.Hpcer404ApplicationJsonErrorDescriptionEnum = exports.Hpcer404ApplicationJsonErrorEnum = exports.Hpcer401ApplicationJson = exports.Hpcer401ApplicationJsonErrorDescriptionEnum = exports.Hpcer401ApplicationJsonErrorEnum = exports.Hpcer400ApplicationJson = exports.Hpcer400ApplicationJsonErrorDescriptionEnum = exports.Hpcer400ApplicationJsonErrorEnum = exports.HpcerSecurity = exports.HpcerRequestBody = exports.HpcerRequestBodyFormatEnum = exports.HpcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var HpcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(HpcerRequestBodyCertificateParameters, _super);
    function HpcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], HpcerRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], HpcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=regno" }),
        __metadata("design:type", String)
    ], HpcerRequestBodyCertificateParameters.prototype, "regno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], HpcerRequestBodyCertificateParameters.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], HpcerRequestBodyCertificateParameters.prototype, "year", void 0);
    return HpcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.HpcerRequestBodyCertificateParameters = HpcerRequestBodyCertificateParameters;
var HpcerRequestBodyFormatEnum;
(function (HpcerRequestBodyFormatEnum) {
    HpcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(HpcerRequestBodyFormatEnum = exports.HpcerRequestBodyFormatEnum || (exports.HpcerRequestBodyFormatEnum = {}));
var HpcerRequestBody = /** @class */ (function (_super) {
    __extends(HpcerRequestBody, _super);
    function HpcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", HpcerRequestBodyCertificateParameters)
    ], HpcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], HpcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], HpcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], HpcerRequestBody.prototype, "txnId", void 0);
    return HpcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.HpcerRequestBody = HpcerRequestBody;
var HpcerSecurity = /** @class */ (function (_super) {
    __extends(HpcerSecurity, _super);
    function HpcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], HpcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], HpcerSecurity.prototype, "clientId", void 0);
    return HpcerSecurity;
}(utils_1.SpeakeasyBase));
exports.HpcerSecurity = HpcerSecurity;
var Hpcer400ApplicationJsonErrorEnum;
(function (Hpcer400ApplicationJsonErrorEnum) {
    Hpcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Hpcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Hpcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Hpcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Hpcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Hpcer400ApplicationJsonErrorEnum = exports.Hpcer400ApplicationJsonErrorEnum || (exports.Hpcer400ApplicationJsonErrorEnum = {}));
var Hpcer400ApplicationJsonErrorDescriptionEnum;
(function (Hpcer400ApplicationJsonErrorDescriptionEnum) {
    Hpcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Hpcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Hpcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Hpcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Hpcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Hpcer400ApplicationJsonErrorDescriptionEnum = exports.Hpcer400ApplicationJsonErrorDescriptionEnum || (exports.Hpcer400ApplicationJsonErrorDescriptionEnum = {}));
var Hpcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Hpcer400ApplicationJson, _super);
    function Hpcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hpcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hpcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Hpcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hpcer400ApplicationJson = Hpcer400ApplicationJson;
var Hpcer401ApplicationJsonErrorEnum;
(function (Hpcer401ApplicationJsonErrorEnum) {
    Hpcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Hpcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Hpcer401ApplicationJsonErrorEnum = exports.Hpcer401ApplicationJsonErrorEnum || (exports.Hpcer401ApplicationJsonErrorEnum = {}));
var Hpcer401ApplicationJsonErrorDescriptionEnum;
(function (Hpcer401ApplicationJsonErrorDescriptionEnum) {
    Hpcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Hpcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Hpcer401ApplicationJsonErrorDescriptionEnum = exports.Hpcer401ApplicationJsonErrorDescriptionEnum || (exports.Hpcer401ApplicationJsonErrorDescriptionEnum = {}));
var Hpcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Hpcer401ApplicationJson, _super);
    function Hpcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hpcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hpcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Hpcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hpcer401ApplicationJson = Hpcer401ApplicationJson;
var Hpcer404ApplicationJsonErrorEnum;
(function (Hpcer404ApplicationJsonErrorEnum) {
    Hpcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Hpcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Hpcer404ApplicationJsonErrorEnum = exports.Hpcer404ApplicationJsonErrorEnum || (exports.Hpcer404ApplicationJsonErrorEnum = {}));
var Hpcer404ApplicationJsonErrorDescriptionEnum;
(function (Hpcer404ApplicationJsonErrorDescriptionEnum) {
    Hpcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Hpcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Hpcer404ApplicationJsonErrorDescriptionEnum = exports.Hpcer404ApplicationJsonErrorDescriptionEnum || (exports.Hpcer404ApplicationJsonErrorDescriptionEnum = {}));
var Hpcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Hpcer404ApplicationJson, _super);
    function Hpcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hpcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hpcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Hpcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hpcer404ApplicationJson = Hpcer404ApplicationJson;
var Hpcer500ApplicationJsonErrorEnum;
(function (Hpcer500ApplicationJsonErrorEnum) {
    Hpcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Hpcer500ApplicationJsonErrorEnum = exports.Hpcer500ApplicationJsonErrorEnum || (exports.Hpcer500ApplicationJsonErrorEnum = {}));
var Hpcer500ApplicationJsonErrorDescriptionEnum;
(function (Hpcer500ApplicationJsonErrorDescriptionEnum) {
    Hpcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Hpcer500ApplicationJsonErrorDescriptionEnum = exports.Hpcer500ApplicationJsonErrorDescriptionEnum || (exports.Hpcer500ApplicationJsonErrorDescriptionEnum = {}));
var Hpcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Hpcer500ApplicationJson, _super);
    function Hpcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hpcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hpcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Hpcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hpcer500ApplicationJson = Hpcer500ApplicationJson;
var Hpcer502ApplicationJsonErrorEnum;
(function (Hpcer502ApplicationJsonErrorEnum) {
    Hpcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Hpcer502ApplicationJsonErrorEnum = exports.Hpcer502ApplicationJsonErrorEnum || (exports.Hpcer502ApplicationJsonErrorEnum = {}));
var Hpcer502ApplicationJsonErrorDescriptionEnum;
(function (Hpcer502ApplicationJsonErrorDescriptionEnum) {
    Hpcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Hpcer502ApplicationJsonErrorDescriptionEnum = exports.Hpcer502ApplicationJsonErrorDescriptionEnum || (exports.Hpcer502ApplicationJsonErrorDescriptionEnum = {}));
var Hpcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Hpcer502ApplicationJson, _super);
    function Hpcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hpcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hpcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Hpcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hpcer502ApplicationJson = Hpcer502ApplicationJson;
var Hpcer503ApplicationJsonErrorEnum;
(function (Hpcer503ApplicationJsonErrorEnum) {
    Hpcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Hpcer503ApplicationJsonErrorEnum = exports.Hpcer503ApplicationJsonErrorEnum || (exports.Hpcer503ApplicationJsonErrorEnum = {}));
var Hpcer503ApplicationJsonErrorDescriptionEnum;
(function (Hpcer503ApplicationJsonErrorDescriptionEnum) {
    Hpcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Hpcer503ApplicationJsonErrorDescriptionEnum = exports.Hpcer503ApplicationJsonErrorDescriptionEnum || (exports.Hpcer503ApplicationJsonErrorDescriptionEnum = {}));
var Hpcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Hpcer503ApplicationJson, _super);
    function Hpcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hpcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hpcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Hpcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hpcer503ApplicationJson = Hpcer503ApplicationJson;
var Hpcer504ApplicationJsonErrorEnum;
(function (Hpcer504ApplicationJsonErrorEnum) {
    Hpcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Hpcer504ApplicationJsonErrorEnum = exports.Hpcer504ApplicationJsonErrorEnum || (exports.Hpcer504ApplicationJsonErrorEnum = {}));
var Hpcer504ApplicationJsonErrorDescriptionEnum;
(function (Hpcer504ApplicationJsonErrorDescriptionEnum) {
    Hpcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Hpcer504ApplicationJsonErrorDescriptionEnum = exports.Hpcer504ApplicationJsonErrorDescriptionEnum || (exports.Hpcer504ApplicationJsonErrorDescriptionEnum = {}));
var Hpcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Hpcer504ApplicationJson, _super);
    function Hpcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hpcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hpcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Hpcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hpcer504ApplicationJson = Hpcer504ApplicationJson;
var HpcerRequest = /** @class */ (function (_super) {
    __extends(HpcerRequest, _super);
    function HpcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", HpcerRequestBody)
    ], HpcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", HpcerSecurity)
    ], HpcerRequest.prototype, "security", void 0);
    return HpcerRequest;
}(utils_1.SpeakeasyBase));
exports.HpcerRequest = HpcerRequest;
var HpcerResponse = /** @class */ (function (_super) {
    __extends(HpcerResponse, _super);
    function HpcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], HpcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], HpcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hpcer400ApplicationJson)
    ], HpcerResponse.prototype, "hpcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hpcer401ApplicationJson)
    ], HpcerResponse.prototype, "hpcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hpcer404ApplicationJson)
    ], HpcerResponse.prototype, "hpcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hpcer500ApplicationJson)
    ], HpcerResponse.prototype, "hpcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hpcer502ApplicationJson)
    ], HpcerResponse.prototype, "hpcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hpcer503ApplicationJson)
    ], HpcerResponse.prototype, "hpcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hpcer504ApplicationJson)
    ], HpcerResponse.prototype, "hpcer504ApplicationJSONObject", void 0);
    return HpcerResponse;
}(utils_1.SpeakeasyBase));
exports.HpcerResponse = HpcerResponse;
