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
exports.CocerResponse = exports.CocerRequest = exports.Cocer504ApplicationJson = exports.Cocer504ApplicationJsonErrorDescriptionEnum = exports.Cocer504ApplicationJsonErrorEnum = exports.Cocer503ApplicationJson = exports.Cocer503ApplicationJsonErrorDescriptionEnum = exports.Cocer503ApplicationJsonErrorEnum = exports.Cocer502ApplicationJson = exports.Cocer502ApplicationJsonErrorDescriptionEnum = exports.Cocer502ApplicationJsonErrorEnum = exports.Cocer500ApplicationJson = exports.Cocer500ApplicationJsonErrorDescriptionEnum = exports.Cocer500ApplicationJsonErrorEnum = exports.Cocer404ApplicationJson = exports.Cocer404ApplicationJsonErrorDescriptionEnum = exports.Cocer404ApplicationJsonErrorEnum = exports.Cocer401ApplicationJson = exports.Cocer401ApplicationJsonErrorDescriptionEnum = exports.Cocer401ApplicationJsonErrorEnum = exports.Cocer400ApplicationJson = exports.Cocer400ApplicationJsonErrorDescriptionEnum = exports.Cocer400ApplicationJsonErrorEnum = exports.CocerSecurity = exports.CocerRequestBody = exports.CocerRequestBodyFormatEnum = exports.CocerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CocerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(CocerRequestBodyCertificateParameters, _super);
    function CocerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cert_type" }),
        __metadata("design:type", String)
    ], CocerRequestBodyCertificateParameters.prototype, "certType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=company_name" }),
        __metadata("design:type", String)
    ], CocerRequestBodyCertificateParameters.prototype, "companyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reg_no" }),
        __metadata("design:type", String)
    ], CocerRequestBodyCertificateParameters.prototype, "regNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sector" }),
        __metadata("design:type", String)
    ], CocerRequestBodyCertificateParameters.prototype, "sector", void 0);
    return CocerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.CocerRequestBodyCertificateParameters = CocerRequestBodyCertificateParameters;
var CocerRequestBodyFormatEnum;
(function (CocerRequestBodyFormatEnum) {
    CocerRequestBodyFormatEnum["Pdf"] = "pdf";
})(CocerRequestBodyFormatEnum = exports.CocerRequestBodyFormatEnum || (exports.CocerRequestBodyFormatEnum = {}));
var CocerRequestBody = /** @class */ (function (_super) {
    __extends(CocerRequestBody, _super);
    function CocerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", CocerRequestBodyCertificateParameters)
    ], CocerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], CocerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], CocerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], CocerRequestBody.prototype, "txnId", void 0);
    return CocerRequestBody;
}(utils_1.SpeakeasyBase));
exports.CocerRequestBody = CocerRequestBody;
var CocerSecurity = /** @class */ (function (_super) {
    __extends(CocerSecurity, _super);
    function CocerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], CocerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], CocerSecurity.prototype, "clientId", void 0);
    return CocerSecurity;
}(utils_1.SpeakeasyBase));
exports.CocerSecurity = CocerSecurity;
var Cocer400ApplicationJsonErrorEnum;
(function (Cocer400ApplicationJsonErrorEnum) {
    Cocer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Cocer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Cocer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Cocer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Cocer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Cocer400ApplicationJsonErrorEnum = exports.Cocer400ApplicationJsonErrorEnum || (exports.Cocer400ApplicationJsonErrorEnum = {}));
var Cocer400ApplicationJsonErrorDescriptionEnum;
(function (Cocer400ApplicationJsonErrorDescriptionEnum) {
    Cocer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Cocer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Cocer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Cocer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Cocer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Cocer400ApplicationJsonErrorDescriptionEnum = exports.Cocer400ApplicationJsonErrorDescriptionEnum || (exports.Cocer400ApplicationJsonErrorDescriptionEnum = {}));
var Cocer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Cocer400ApplicationJson, _super);
    function Cocer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cocer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cocer400ApplicationJson.prototype, "errorDescription", void 0);
    return Cocer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cocer400ApplicationJson = Cocer400ApplicationJson;
var Cocer401ApplicationJsonErrorEnum;
(function (Cocer401ApplicationJsonErrorEnum) {
    Cocer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Cocer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Cocer401ApplicationJsonErrorEnum = exports.Cocer401ApplicationJsonErrorEnum || (exports.Cocer401ApplicationJsonErrorEnum = {}));
var Cocer401ApplicationJsonErrorDescriptionEnum;
(function (Cocer401ApplicationJsonErrorDescriptionEnum) {
    Cocer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Cocer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Cocer401ApplicationJsonErrorDescriptionEnum = exports.Cocer401ApplicationJsonErrorDescriptionEnum || (exports.Cocer401ApplicationJsonErrorDescriptionEnum = {}));
var Cocer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Cocer401ApplicationJson, _super);
    function Cocer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cocer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cocer401ApplicationJson.prototype, "errorDescription", void 0);
    return Cocer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cocer401ApplicationJson = Cocer401ApplicationJson;
var Cocer404ApplicationJsonErrorEnum;
(function (Cocer404ApplicationJsonErrorEnum) {
    Cocer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Cocer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Cocer404ApplicationJsonErrorEnum = exports.Cocer404ApplicationJsonErrorEnum || (exports.Cocer404ApplicationJsonErrorEnum = {}));
var Cocer404ApplicationJsonErrorDescriptionEnum;
(function (Cocer404ApplicationJsonErrorDescriptionEnum) {
    Cocer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Cocer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Cocer404ApplicationJsonErrorDescriptionEnum = exports.Cocer404ApplicationJsonErrorDescriptionEnum || (exports.Cocer404ApplicationJsonErrorDescriptionEnum = {}));
var Cocer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Cocer404ApplicationJson, _super);
    function Cocer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cocer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cocer404ApplicationJson.prototype, "errorDescription", void 0);
    return Cocer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cocer404ApplicationJson = Cocer404ApplicationJson;
var Cocer500ApplicationJsonErrorEnum;
(function (Cocer500ApplicationJsonErrorEnum) {
    Cocer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Cocer500ApplicationJsonErrorEnum = exports.Cocer500ApplicationJsonErrorEnum || (exports.Cocer500ApplicationJsonErrorEnum = {}));
var Cocer500ApplicationJsonErrorDescriptionEnum;
(function (Cocer500ApplicationJsonErrorDescriptionEnum) {
    Cocer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Cocer500ApplicationJsonErrorDescriptionEnum = exports.Cocer500ApplicationJsonErrorDescriptionEnum || (exports.Cocer500ApplicationJsonErrorDescriptionEnum = {}));
var Cocer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Cocer500ApplicationJson, _super);
    function Cocer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cocer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cocer500ApplicationJson.prototype, "errorDescription", void 0);
    return Cocer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cocer500ApplicationJson = Cocer500ApplicationJson;
var Cocer502ApplicationJsonErrorEnum;
(function (Cocer502ApplicationJsonErrorEnum) {
    Cocer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Cocer502ApplicationJsonErrorEnum = exports.Cocer502ApplicationJsonErrorEnum || (exports.Cocer502ApplicationJsonErrorEnum = {}));
var Cocer502ApplicationJsonErrorDescriptionEnum;
(function (Cocer502ApplicationJsonErrorDescriptionEnum) {
    Cocer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Cocer502ApplicationJsonErrorDescriptionEnum = exports.Cocer502ApplicationJsonErrorDescriptionEnum || (exports.Cocer502ApplicationJsonErrorDescriptionEnum = {}));
var Cocer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Cocer502ApplicationJson, _super);
    function Cocer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cocer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cocer502ApplicationJson.prototype, "errorDescription", void 0);
    return Cocer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cocer502ApplicationJson = Cocer502ApplicationJson;
var Cocer503ApplicationJsonErrorEnum;
(function (Cocer503ApplicationJsonErrorEnum) {
    Cocer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Cocer503ApplicationJsonErrorEnum = exports.Cocer503ApplicationJsonErrorEnum || (exports.Cocer503ApplicationJsonErrorEnum = {}));
var Cocer503ApplicationJsonErrorDescriptionEnum;
(function (Cocer503ApplicationJsonErrorDescriptionEnum) {
    Cocer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Cocer503ApplicationJsonErrorDescriptionEnum = exports.Cocer503ApplicationJsonErrorDescriptionEnum || (exports.Cocer503ApplicationJsonErrorDescriptionEnum = {}));
var Cocer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Cocer503ApplicationJson, _super);
    function Cocer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cocer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cocer503ApplicationJson.prototype, "errorDescription", void 0);
    return Cocer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cocer503ApplicationJson = Cocer503ApplicationJson;
var Cocer504ApplicationJsonErrorEnum;
(function (Cocer504ApplicationJsonErrorEnum) {
    Cocer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Cocer504ApplicationJsonErrorEnum = exports.Cocer504ApplicationJsonErrorEnum || (exports.Cocer504ApplicationJsonErrorEnum = {}));
var Cocer504ApplicationJsonErrorDescriptionEnum;
(function (Cocer504ApplicationJsonErrorDescriptionEnum) {
    Cocer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Cocer504ApplicationJsonErrorDescriptionEnum = exports.Cocer504ApplicationJsonErrorDescriptionEnum || (exports.Cocer504ApplicationJsonErrorDescriptionEnum = {}));
var Cocer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Cocer504ApplicationJson, _super);
    function Cocer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cocer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cocer504ApplicationJson.prototype, "errorDescription", void 0);
    return Cocer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cocer504ApplicationJson = Cocer504ApplicationJson;
var CocerRequest = /** @class */ (function (_super) {
    __extends(CocerRequest, _super);
    function CocerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CocerRequestBody)
    ], CocerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CocerSecurity)
    ], CocerRequest.prototype, "security", void 0);
    return CocerRequest;
}(utils_1.SpeakeasyBase));
exports.CocerRequest = CocerRequest;
var CocerResponse = /** @class */ (function (_super) {
    __extends(CocerResponse, _super);
    function CocerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CocerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CocerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cocer400ApplicationJson)
    ], CocerResponse.prototype, "cocer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cocer401ApplicationJson)
    ], CocerResponse.prototype, "cocer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cocer404ApplicationJson)
    ], CocerResponse.prototype, "cocer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cocer500ApplicationJson)
    ], CocerResponse.prototype, "cocer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cocer502ApplicationJson)
    ], CocerResponse.prototype, "cocer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cocer503ApplicationJson)
    ], CocerResponse.prototype, "cocer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cocer504ApplicationJson)
    ], CocerResponse.prototype, "cocer504ApplicationJSONObject", void 0);
    return CocerResponse;
}(utils_1.SpeakeasyBase));
exports.CocerResponse = CocerResponse;
