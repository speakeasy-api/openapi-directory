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
exports.FitcerResponse = exports.FitcerRequest = exports.Fitcer504ApplicationJson = exports.Fitcer504ApplicationJsonErrorDescriptionEnum = exports.Fitcer504ApplicationJsonErrorEnum = exports.Fitcer503ApplicationJson = exports.Fitcer503ApplicationJsonErrorDescriptionEnum = exports.Fitcer503ApplicationJsonErrorEnum = exports.Fitcer502ApplicationJson = exports.Fitcer502ApplicationJsonErrorDescriptionEnum = exports.Fitcer502ApplicationJsonErrorEnum = exports.Fitcer500ApplicationJson = exports.Fitcer500ApplicationJsonErrorDescriptionEnum = exports.Fitcer500ApplicationJsonErrorEnum = exports.Fitcer404ApplicationJson = exports.Fitcer404ApplicationJsonErrorDescriptionEnum = exports.Fitcer404ApplicationJsonErrorEnum = exports.Fitcer401ApplicationJson = exports.Fitcer401ApplicationJsonErrorDescriptionEnum = exports.Fitcer401ApplicationJsonErrorEnum = exports.Fitcer400ApplicationJson = exports.Fitcer400ApplicationJsonErrorDescriptionEnum = exports.Fitcer400ApplicationJsonErrorEnum = exports.FitcerSecurity = exports.FitcerRequestBody = exports.FitcerRequestBodyFormatEnum = exports.FitcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var FitcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(FitcerRequestBodyCertificateParameters, _super);
    function FitcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], FitcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], FitcerRequestBodyCertificateParameters.prototype, "uid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chasis_no" }),
        __metadata("design:type", String)
    ], FitcerRequestBodyCertificateParameters.prototype, "chasisNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reg_no" }),
        __metadata("design:type", String)
    ], FitcerRequestBodyCertificateParameters.prototype, "regNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=swd_name" }),
        __metadata("design:type", String)
    ], FitcerRequestBodyCertificateParameters.prototype, "swdName", void 0);
    return FitcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.FitcerRequestBodyCertificateParameters = FitcerRequestBodyCertificateParameters;
var FitcerRequestBodyFormatEnum;
(function (FitcerRequestBodyFormatEnum) {
    FitcerRequestBodyFormatEnum["Xml"] = "xml";
    FitcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(FitcerRequestBodyFormatEnum = exports.FitcerRequestBodyFormatEnum || (exports.FitcerRequestBodyFormatEnum = {}));
var FitcerRequestBody = /** @class */ (function (_super) {
    __extends(FitcerRequestBody, _super);
    function FitcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", FitcerRequestBodyCertificateParameters)
    ], FitcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], FitcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], FitcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], FitcerRequestBody.prototype, "txnId", void 0);
    return FitcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.FitcerRequestBody = FitcerRequestBody;
var FitcerSecurity = /** @class */ (function (_super) {
    __extends(FitcerSecurity, _super);
    function FitcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], FitcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], FitcerSecurity.prototype, "clientId", void 0);
    return FitcerSecurity;
}(utils_1.SpeakeasyBase));
exports.FitcerSecurity = FitcerSecurity;
var Fitcer400ApplicationJsonErrorEnum;
(function (Fitcer400ApplicationJsonErrorEnum) {
    Fitcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Fitcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Fitcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Fitcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Fitcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Fitcer400ApplicationJsonErrorEnum = exports.Fitcer400ApplicationJsonErrorEnum || (exports.Fitcer400ApplicationJsonErrorEnum = {}));
var Fitcer400ApplicationJsonErrorDescriptionEnum;
(function (Fitcer400ApplicationJsonErrorDescriptionEnum) {
    Fitcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Fitcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Fitcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Fitcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Fitcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Fitcer400ApplicationJsonErrorDescriptionEnum = exports.Fitcer400ApplicationJsonErrorDescriptionEnum || (exports.Fitcer400ApplicationJsonErrorDescriptionEnum = {}));
var Fitcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Fitcer400ApplicationJson, _super);
    function Fitcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fitcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fitcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Fitcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Fitcer400ApplicationJson = Fitcer400ApplicationJson;
var Fitcer401ApplicationJsonErrorEnum;
(function (Fitcer401ApplicationJsonErrorEnum) {
    Fitcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Fitcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Fitcer401ApplicationJsonErrorEnum = exports.Fitcer401ApplicationJsonErrorEnum || (exports.Fitcer401ApplicationJsonErrorEnum = {}));
var Fitcer401ApplicationJsonErrorDescriptionEnum;
(function (Fitcer401ApplicationJsonErrorDescriptionEnum) {
    Fitcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Fitcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Fitcer401ApplicationJsonErrorDescriptionEnum = exports.Fitcer401ApplicationJsonErrorDescriptionEnum || (exports.Fitcer401ApplicationJsonErrorDescriptionEnum = {}));
var Fitcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Fitcer401ApplicationJson, _super);
    function Fitcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fitcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fitcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Fitcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Fitcer401ApplicationJson = Fitcer401ApplicationJson;
var Fitcer404ApplicationJsonErrorEnum;
(function (Fitcer404ApplicationJsonErrorEnum) {
    Fitcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Fitcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Fitcer404ApplicationJsonErrorEnum = exports.Fitcer404ApplicationJsonErrorEnum || (exports.Fitcer404ApplicationJsonErrorEnum = {}));
var Fitcer404ApplicationJsonErrorDescriptionEnum;
(function (Fitcer404ApplicationJsonErrorDescriptionEnum) {
    Fitcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Fitcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Fitcer404ApplicationJsonErrorDescriptionEnum = exports.Fitcer404ApplicationJsonErrorDescriptionEnum || (exports.Fitcer404ApplicationJsonErrorDescriptionEnum = {}));
var Fitcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Fitcer404ApplicationJson, _super);
    function Fitcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fitcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fitcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Fitcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Fitcer404ApplicationJson = Fitcer404ApplicationJson;
var Fitcer500ApplicationJsonErrorEnum;
(function (Fitcer500ApplicationJsonErrorEnum) {
    Fitcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Fitcer500ApplicationJsonErrorEnum = exports.Fitcer500ApplicationJsonErrorEnum || (exports.Fitcer500ApplicationJsonErrorEnum = {}));
var Fitcer500ApplicationJsonErrorDescriptionEnum;
(function (Fitcer500ApplicationJsonErrorDescriptionEnum) {
    Fitcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Fitcer500ApplicationJsonErrorDescriptionEnum = exports.Fitcer500ApplicationJsonErrorDescriptionEnum || (exports.Fitcer500ApplicationJsonErrorDescriptionEnum = {}));
var Fitcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Fitcer500ApplicationJson, _super);
    function Fitcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fitcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fitcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Fitcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Fitcer500ApplicationJson = Fitcer500ApplicationJson;
var Fitcer502ApplicationJsonErrorEnum;
(function (Fitcer502ApplicationJsonErrorEnum) {
    Fitcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Fitcer502ApplicationJsonErrorEnum = exports.Fitcer502ApplicationJsonErrorEnum || (exports.Fitcer502ApplicationJsonErrorEnum = {}));
var Fitcer502ApplicationJsonErrorDescriptionEnum;
(function (Fitcer502ApplicationJsonErrorDescriptionEnum) {
    Fitcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Fitcer502ApplicationJsonErrorDescriptionEnum = exports.Fitcer502ApplicationJsonErrorDescriptionEnum || (exports.Fitcer502ApplicationJsonErrorDescriptionEnum = {}));
var Fitcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Fitcer502ApplicationJson, _super);
    function Fitcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fitcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fitcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Fitcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Fitcer502ApplicationJson = Fitcer502ApplicationJson;
var Fitcer503ApplicationJsonErrorEnum;
(function (Fitcer503ApplicationJsonErrorEnum) {
    Fitcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Fitcer503ApplicationJsonErrorEnum = exports.Fitcer503ApplicationJsonErrorEnum || (exports.Fitcer503ApplicationJsonErrorEnum = {}));
var Fitcer503ApplicationJsonErrorDescriptionEnum;
(function (Fitcer503ApplicationJsonErrorDescriptionEnum) {
    Fitcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Fitcer503ApplicationJsonErrorDescriptionEnum = exports.Fitcer503ApplicationJsonErrorDescriptionEnum || (exports.Fitcer503ApplicationJsonErrorDescriptionEnum = {}));
var Fitcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Fitcer503ApplicationJson, _super);
    function Fitcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fitcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fitcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Fitcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Fitcer503ApplicationJson = Fitcer503ApplicationJson;
var Fitcer504ApplicationJsonErrorEnum;
(function (Fitcer504ApplicationJsonErrorEnum) {
    Fitcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Fitcer504ApplicationJsonErrorEnum = exports.Fitcer504ApplicationJsonErrorEnum || (exports.Fitcer504ApplicationJsonErrorEnum = {}));
var Fitcer504ApplicationJsonErrorDescriptionEnum;
(function (Fitcer504ApplicationJsonErrorDescriptionEnum) {
    Fitcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Fitcer504ApplicationJsonErrorDescriptionEnum = exports.Fitcer504ApplicationJsonErrorDescriptionEnum || (exports.Fitcer504ApplicationJsonErrorDescriptionEnum = {}));
var Fitcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Fitcer504ApplicationJson, _super);
    function Fitcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fitcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fitcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Fitcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Fitcer504ApplicationJson = Fitcer504ApplicationJson;
var FitcerRequest = /** @class */ (function (_super) {
    __extends(FitcerRequest, _super);
    function FitcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", FitcerRequestBody)
    ], FitcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FitcerSecurity)
    ], FitcerRequest.prototype, "security", void 0);
    return FitcerRequest;
}(utils_1.SpeakeasyBase));
exports.FitcerRequest = FitcerRequest;
var FitcerResponse = /** @class */ (function (_super) {
    __extends(FitcerResponse, _super);
    function FitcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], FitcerResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FitcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FitcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Fitcer400ApplicationJson)
    ], FitcerResponse.prototype, "fitcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Fitcer401ApplicationJson)
    ], FitcerResponse.prototype, "fitcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Fitcer404ApplicationJson)
    ], FitcerResponse.prototype, "fitcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Fitcer500ApplicationJson)
    ], FitcerResponse.prototype, "fitcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Fitcer502ApplicationJson)
    ], FitcerResponse.prototype, "fitcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Fitcer503ApplicationJson)
    ], FitcerResponse.prototype, "fitcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Fitcer504ApplicationJson)
    ], FitcerResponse.prototype, "fitcer504ApplicationJSONObject", void 0);
    return FitcerResponse;
}(utils_1.SpeakeasyBase));
exports.FitcerResponse = FitcerResponse;
