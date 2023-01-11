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
exports.MrcerResponse = exports.MrcerRequest = exports.Mrcer504ApplicationJson = exports.Mrcer504ApplicationJsonErrorDescriptionEnum = exports.Mrcer504ApplicationJsonErrorEnum = exports.Mrcer503ApplicationJson = exports.Mrcer503ApplicationJsonErrorDescriptionEnum = exports.Mrcer503ApplicationJsonErrorEnum = exports.Mrcer502ApplicationJson = exports.Mrcer502ApplicationJsonErrorDescriptionEnum = exports.Mrcer502ApplicationJsonErrorEnum = exports.Mrcer500ApplicationJson = exports.Mrcer500ApplicationJsonErrorDescriptionEnum = exports.Mrcer500ApplicationJsonErrorEnum = exports.Mrcer404ApplicationJson = exports.Mrcer404ApplicationJsonErrorDescriptionEnum = exports.Mrcer404ApplicationJsonErrorEnum = exports.Mrcer401ApplicationJson = exports.Mrcer401ApplicationJsonErrorDescriptionEnum = exports.Mrcer401ApplicationJsonErrorEnum = exports.Mrcer400ApplicationJson = exports.Mrcer400ApplicationJsonErrorDescriptionEnum = exports.Mrcer400ApplicationJsonErrorEnum = exports.MrcerSecurity = exports.MrcerRequestBody = exports.MrcerRequestBodyFormatEnum = exports.MrcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MrcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(MrcerRequestBodyCertificateParameters, _super);
    function MrcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CERT_TYPE" }),
        __metadata("design:type", String)
    ], MrcerRequestBodyCertificateParameters.prototype, "certTYPE", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], MrcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RROLL" }),
        __metadata("design:type", String)
    ], MrcerRequestBodyCertificateParameters.prototype, "rroll", void 0);
    return MrcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.MrcerRequestBodyCertificateParameters = MrcerRequestBodyCertificateParameters;
var MrcerRequestBodyFormatEnum;
(function (MrcerRequestBodyFormatEnum) {
    MrcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(MrcerRequestBodyFormatEnum = exports.MrcerRequestBodyFormatEnum || (exports.MrcerRequestBodyFormatEnum = {}));
var MrcerRequestBody = /** @class */ (function (_super) {
    __extends(MrcerRequestBody, _super);
    function MrcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", MrcerRequestBodyCertificateParameters)
    ], MrcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], MrcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], MrcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], MrcerRequestBody.prototype, "txnId", void 0);
    return MrcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.MrcerRequestBody = MrcerRequestBody;
var MrcerSecurity = /** @class */ (function (_super) {
    __extends(MrcerSecurity, _super);
    function MrcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], MrcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], MrcerSecurity.prototype, "clientId", void 0);
    return MrcerSecurity;
}(utils_1.SpeakeasyBase));
exports.MrcerSecurity = MrcerSecurity;
var Mrcer400ApplicationJsonErrorEnum;
(function (Mrcer400ApplicationJsonErrorEnum) {
    Mrcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Mrcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Mrcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Mrcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Mrcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Mrcer400ApplicationJsonErrorEnum = exports.Mrcer400ApplicationJsonErrorEnum || (exports.Mrcer400ApplicationJsonErrorEnum = {}));
var Mrcer400ApplicationJsonErrorDescriptionEnum;
(function (Mrcer400ApplicationJsonErrorDescriptionEnum) {
    Mrcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Mrcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Mrcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Mrcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Mrcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Mrcer400ApplicationJsonErrorDescriptionEnum = exports.Mrcer400ApplicationJsonErrorDescriptionEnum || (exports.Mrcer400ApplicationJsonErrorDescriptionEnum = {}));
var Mrcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Mrcer400ApplicationJson, _super);
    function Mrcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mrcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mrcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Mrcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mrcer400ApplicationJson = Mrcer400ApplicationJson;
var Mrcer401ApplicationJsonErrorEnum;
(function (Mrcer401ApplicationJsonErrorEnum) {
    Mrcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Mrcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Mrcer401ApplicationJsonErrorEnum = exports.Mrcer401ApplicationJsonErrorEnum || (exports.Mrcer401ApplicationJsonErrorEnum = {}));
var Mrcer401ApplicationJsonErrorDescriptionEnum;
(function (Mrcer401ApplicationJsonErrorDescriptionEnum) {
    Mrcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Mrcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Mrcer401ApplicationJsonErrorDescriptionEnum = exports.Mrcer401ApplicationJsonErrorDescriptionEnum || (exports.Mrcer401ApplicationJsonErrorDescriptionEnum = {}));
var Mrcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Mrcer401ApplicationJson, _super);
    function Mrcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mrcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mrcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Mrcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mrcer401ApplicationJson = Mrcer401ApplicationJson;
var Mrcer404ApplicationJsonErrorEnum;
(function (Mrcer404ApplicationJsonErrorEnum) {
    Mrcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Mrcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Mrcer404ApplicationJsonErrorEnum = exports.Mrcer404ApplicationJsonErrorEnum || (exports.Mrcer404ApplicationJsonErrorEnum = {}));
var Mrcer404ApplicationJsonErrorDescriptionEnum;
(function (Mrcer404ApplicationJsonErrorDescriptionEnum) {
    Mrcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Mrcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Mrcer404ApplicationJsonErrorDescriptionEnum = exports.Mrcer404ApplicationJsonErrorDescriptionEnum || (exports.Mrcer404ApplicationJsonErrorDescriptionEnum = {}));
var Mrcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Mrcer404ApplicationJson, _super);
    function Mrcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mrcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mrcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Mrcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mrcer404ApplicationJson = Mrcer404ApplicationJson;
var Mrcer500ApplicationJsonErrorEnum;
(function (Mrcer500ApplicationJsonErrorEnum) {
    Mrcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Mrcer500ApplicationJsonErrorEnum = exports.Mrcer500ApplicationJsonErrorEnum || (exports.Mrcer500ApplicationJsonErrorEnum = {}));
var Mrcer500ApplicationJsonErrorDescriptionEnum;
(function (Mrcer500ApplicationJsonErrorDescriptionEnum) {
    Mrcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Mrcer500ApplicationJsonErrorDescriptionEnum = exports.Mrcer500ApplicationJsonErrorDescriptionEnum || (exports.Mrcer500ApplicationJsonErrorDescriptionEnum = {}));
var Mrcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Mrcer500ApplicationJson, _super);
    function Mrcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mrcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mrcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Mrcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mrcer500ApplicationJson = Mrcer500ApplicationJson;
var Mrcer502ApplicationJsonErrorEnum;
(function (Mrcer502ApplicationJsonErrorEnum) {
    Mrcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Mrcer502ApplicationJsonErrorEnum = exports.Mrcer502ApplicationJsonErrorEnum || (exports.Mrcer502ApplicationJsonErrorEnum = {}));
var Mrcer502ApplicationJsonErrorDescriptionEnum;
(function (Mrcer502ApplicationJsonErrorDescriptionEnum) {
    Mrcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Mrcer502ApplicationJsonErrorDescriptionEnum = exports.Mrcer502ApplicationJsonErrorDescriptionEnum || (exports.Mrcer502ApplicationJsonErrorDescriptionEnum = {}));
var Mrcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Mrcer502ApplicationJson, _super);
    function Mrcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mrcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mrcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Mrcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mrcer502ApplicationJson = Mrcer502ApplicationJson;
var Mrcer503ApplicationJsonErrorEnum;
(function (Mrcer503ApplicationJsonErrorEnum) {
    Mrcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Mrcer503ApplicationJsonErrorEnum = exports.Mrcer503ApplicationJsonErrorEnum || (exports.Mrcer503ApplicationJsonErrorEnum = {}));
var Mrcer503ApplicationJsonErrorDescriptionEnum;
(function (Mrcer503ApplicationJsonErrorDescriptionEnum) {
    Mrcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Mrcer503ApplicationJsonErrorDescriptionEnum = exports.Mrcer503ApplicationJsonErrorDescriptionEnum || (exports.Mrcer503ApplicationJsonErrorDescriptionEnum = {}));
var Mrcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Mrcer503ApplicationJson, _super);
    function Mrcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mrcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mrcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Mrcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mrcer503ApplicationJson = Mrcer503ApplicationJson;
var Mrcer504ApplicationJsonErrorEnum;
(function (Mrcer504ApplicationJsonErrorEnum) {
    Mrcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Mrcer504ApplicationJsonErrorEnum = exports.Mrcer504ApplicationJsonErrorEnum || (exports.Mrcer504ApplicationJsonErrorEnum = {}));
var Mrcer504ApplicationJsonErrorDescriptionEnum;
(function (Mrcer504ApplicationJsonErrorDescriptionEnum) {
    Mrcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Mrcer504ApplicationJsonErrorDescriptionEnum = exports.Mrcer504ApplicationJsonErrorDescriptionEnum || (exports.Mrcer504ApplicationJsonErrorDescriptionEnum = {}));
var Mrcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Mrcer504ApplicationJson, _super);
    function Mrcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mrcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mrcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Mrcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mrcer504ApplicationJson = Mrcer504ApplicationJson;
var MrcerRequest = /** @class */ (function (_super) {
    __extends(MrcerRequest, _super);
    function MrcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", MrcerRequestBody)
    ], MrcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MrcerSecurity)
    ], MrcerRequest.prototype, "security", void 0);
    return MrcerRequest;
}(utils_1.SpeakeasyBase));
exports.MrcerRequest = MrcerRequest;
var MrcerResponse = /** @class */ (function (_super) {
    __extends(MrcerResponse, _super);
    function MrcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MrcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MrcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mrcer400ApplicationJson)
    ], MrcerResponse.prototype, "mrcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mrcer401ApplicationJson)
    ], MrcerResponse.prototype, "mrcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mrcer404ApplicationJson)
    ], MrcerResponse.prototype, "mrcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mrcer500ApplicationJson)
    ], MrcerResponse.prototype, "mrcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mrcer502ApplicationJson)
    ], MrcerResponse.prototype, "mrcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mrcer503ApplicationJson)
    ], MrcerResponse.prototype, "mrcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mrcer504ApplicationJson)
    ], MrcerResponse.prototype, "mrcer504ApplicationJSONObject", void 0);
    return MrcerResponse;
}(utils_1.SpeakeasyBase));
exports.MrcerResponse = MrcerResponse;
