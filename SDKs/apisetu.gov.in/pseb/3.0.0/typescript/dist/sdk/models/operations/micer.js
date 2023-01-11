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
exports.MicerResponse = exports.MicerRequest = exports.Micer504ApplicationJson = exports.Micer504ApplicationJsonErrorDescriptionEnum = exports.Micer504ApplicationJsonErrorEnum = exports.Micer503ApplicationJson = exports.Micer503ApplicationJsonErrorDescriptionEnum = exports.Micer503ApplicationJsonErrorEnum = exports.Micer502ApplicationJson = exports.Micer502ApplicationJsonErrorDescriptionEnum = exports.Micer502ApplicationJsonErrorEnum = exports.Micer500ApplicationJson = exports.Micer500ApplicationJsonErrorDescriptionEnum = exports.Micer500ApplicationJsonErrorEnum = exports.Micer404ApplicationJson = exports.Micer404ApplicationJsonErrorDescriptionEnum = exports.Micer404ApplicationJsonErrorEnum = exports.Micer401ApplicationJson = exports.Micer401ApplicationJsonErrorDescriptionEnum = exports.Micer401ApplicationJsonErrorEnum = exports.Micer400ApplicationJson = exports.Micer400ApplicationJsonErrorDescriptionEnum = exports.Micer400ApplicationJsonErrorEnum = exports.MicerSecurity = exports.MicerRequestBody = exports.MicerRequestBodyFormatEnum = exports.MicerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MicerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(MicerRequestBodyCertificateParameters, _super);
    function MicerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], MicerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], MicerRequestBodyCertificateParameters.prototype, "uid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rollno" }),
        __metadata("design:type", String)
    ], MicerRequestBodyCertificateParameters.prototype, "rollno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], MicerRequestBodyCertificateParameters.prototype, "year", void 0);
    return MicerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.MicerRequestBodyCertificateParameters = MicerRequestBodyCertificateParameters;
var MicerRequestBodyFormatEnum;
(function (MicerRequestBodyFormatEnum) {
    MicerRequestBodyFormatEnum["Pdf"] = "pdf";
})(MicerRequestBodyFormatEnum = exports.MicerRequestBodyFormatEnum || (exports.MicerRequestBodyFormatEnum = {}));
var MicerRequestBody = /** @class */ (function (_super) {
    __extends(MicerRequestBody, _super);
    function MicerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", MicerRequestBodyCertificateParameters)
    ], MicerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], MicerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], MicerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], MicerRequestBody.prototype, "txnId", void 0);
    return MicerRequestBody;
}(utils_1.SpeakeasyBase));
exports.MicerRequestBody = MicerRequestBody;
var MicerSecurity = /** @class */ (function (_super) {
    __extends(MicerSecurity, _super);
    function MicerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], MicerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], MicerSecurity.prototype, "clientId", void 0);
    return MicerSecurity;
}(utils_1.SpeakeasyBase));
exports.MicerSecurity = MicerSecurity;
var Micer400ApplicationJsonErrorEnum;
(function (Micer400ApplicationJsonErrorEnum) {
    Micer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Micer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Micer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Micer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Micer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Micer400ApplicationJsonErrorEnum = exports.Micer400ApplicationJsonErrorEnum || (exports.Micer400ApplicationJsonErrorEnum = {}));
var Micer400ApplicationJsonErrorDescriptionEnum;
(function (Micer400ApplicationJsonErrorDescriptionEnum) {
    Micer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Micer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Micer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Micer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Micer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Micer400ApplicationJsonErrorDescriptionEnum = exports.Micer400ApplicationJsonErrorDescriptionEnum || (exports.Micer400ApplicationJsonErrorDescriptionEnum = {}));
var Micer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Micer400ApplicationJson, _super);
    function Micer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Micer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Micer400ApplicationJson.prototype, "errorDescription", void 0);
    return Micer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Micer400ApplicationJson = Micer400ApplicationJson;
var Micer401ApplicationJsonErrorEnum;
(function (Micer401ApplicationJsonErrorEnum) {
    Micer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Micer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Micer401ApplicationJsonErrorEnum = exports.Micer401ApplicationJsonErrorEnum || (exports.Micer401ApplicationJsonErrorEnum = {}));
var Micer401ApplicationJsonErrorDescriptionEnum;
(function (Micer401ApplicationJsonErrorDescriptionEnum) {
    Micer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Micer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Micer401ApplicationJsonErrorDescriptionEnum = exports.Micer401ApplicationJsonErrorDescriptionEnum || (exports.Micer401ApplicationJsonErrorDescriptionEnum = {}));
var Micer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Micer401ApplicationJson, _super);
    function Micer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Micer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Micer401ApplicationJson.prototype, "errorDescription", void 0);
    return Micer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Micer401ApplicationJson = Micer401ApplicationJson;
var Micer404ApplicationJsonErrorEnum;
(function (Micer404ApplicationJsonErrorEnum) {
    Micer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Micer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Micer404ApplicationJsonErrorEnum = exports.Micer404ApplicationJsonErrorEnum || (exports.Micer404ApplicationJsonErrorEnum = {}));
var Micer404ApplicationJsonErrorDescriptionEnum;
(function (Micer404ApplicationJsonErrorDescriptionEnum) {
    Micer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Micer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Micer404ApplicationJsonErrorDescriptionEnum = exports.Micer404ApplicationJsonErrorDescriptionEnum || (exports.Micer404ApplicationJsonErrorDescriptionEnum = {}));
var Micer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Micer404ApplicationJson, _super);
    function Micer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Micer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Micer404ApplicationJson.prototype, "errorDescription", void 0);
    return Micer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Micer404ApplicationJson = Micer404ApplicationJson;
var Micer500ApplicationJsonErrorEnum;
(function (Micer500ApplicationJsonErrorEnum) {
    Micer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Micer500ApplicationJsonErrorEnum = exports.Micer500ApplicationJsonErrorEnum || (exports.Micer500ApplicationJsonErrorEnum = {}));
var Micer500ApplicationJsonErrorDescriptionEnum;
(function (Micer500ApplicationJsonErrorDescriptionEnum) {
    Micer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Micer500ApplicationJsonErrorDescriptionEnum = exports.Micer500ApplicationJsonErrorDescriptionEnum || (exports.Micer500ApplicationJsonErrorDescriptionEnum = {}));
var Micer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Micer500ApplicationJson, _super);
    function Micer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Micer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Micer500ApplicationJson.prototype, "errorDescription", void 0);
    return Micer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Micer500ApplicationJson = Micer500ApplicationJson;
var Micer502ApplicationJsonErrorEnum;
(function (Micer502ApplicationJsonErrorEnum) {
    Micer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Micer502ApplicationJsonErrorEnum = exports.Micer502ApplicationJsonErrorEnum || (exports.Micer502ApplicationJsonErrorEnum = {}));
var Micer502ApplicationJsonErrorDescriptionEnum;
(function (Micer502ApplicationJsonErrorDescriptionEnum) {
    Micer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Micer502ApplicationJsonErrorDescriptionEnum = exports.Micer502ApplicationJsonErrorDescriptionEnum || (exports.Micer502ApplicationJsonErrorDescriptionEnum = {}));
var Micer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Micer502ApplicationJson, _super);
    function Micer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Micer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Micer502ApplicationJson.prototype, "errorDescription", void 0);
    return Micer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Micer502ApplicationJson = Micer502ApplicationJson;
var Micer503ApplicationJsonErrorEnum;
(function (Micer503ApplicationJsonErrorEnum) {
    Micer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Micer503ApplicationJsonErrorEnum = exports.Micer503ApplicationJsonErrorEnum || (exports.Micer503ApplicationJsonErrorEnum = {}));
var Micer503ApplicationJsonErrorDescriptionEnum;
(function (Micer503ApplicationJsonErrorDescriptionEnum) {
    Micer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Micer503ApplicationJsonErrorDescriptionEnum = exports.Micer503ApplicationJsonErrorDescriptionEnum || (exports.Micer503ApplicationJsonErrorDescriptionEnum = {}));
var Micer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Micer503ApplicationJson, _super);
    function Micer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Micer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Micer503ApplicationJson.prototype, "errorDescription", void 0);
    return Micer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Micer503ApplicationJson = Micer503ApplicationJson;
var Micer504ApplicationJsonErrorEnum;
(function (Micer504ApplicationJsonErrorEnum) {
    Micer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Micer504ApplicationJsonErrorEnum = exports.Micer504ApplicationJsonErrorEnum || (exports.Micer504ApplicationJsonErrorEnum = {}));
var Micer504ApplicationJsonErrorDescriptionEnum;
(function (Micer504ApplicationJsonErrorDescriptionEnum) {
    Micer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Micer504ApplicationJsonErrorDescriptionEnum = exports.Micer504ApplicationJsonErrorDescriptionEnum || (exports.Micer504ApplicationJsonErrorDescriptionEnum = {}));
var Micer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Micer504ApplicationJson, _super);
    function Micer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Micer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Micer504ApplicationJson.prototype, "errorDescription", void 0);
    return Micer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Micer504ApplicationJson = Micer504ApplicationJson;
var MicerRequest = /** @class */ (function (_super) {
    __extends(MicerRequest, _super);
    function MicerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", MicerRequestBody)
    ], MicerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MicerSecurity)
    ], MicerRequest.prototype, "security", void 0);
    return MicerRequest;
}(utils_1.SpeakeasyBase));
exports.MicerRequest = MicerRequest;
var MicerResponse = /** @class */ (function (_super) {
    __extends(MicerResponse, _super);
    function MicerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MicerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MicerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Micer400ApplicationJson)
    ], MicerResponse.prototype, "micer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Micer401ApplicationJson)
    ], MicerResponse.prototype, "micer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Micer404ApplicationJson)
    ], MicerResponse.prototype, "micer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Micer500ApplicationJson)
    ], MicerResponse.prototype, "micer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Micer502ApplicationJson)
    ], MicerResponse.prototype, "micer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Micer503ApplicationJson)
    ], MicerResponse.prototype, "micer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Micer504ApplicationJson)
    ], MicerResponse.prototype, "micer504ApplicationJSONObject", void 0);
    return MicerResponse;
}(utils_1.SpeakeasyBase));
exports.MicerResponse = MicerResponse;
