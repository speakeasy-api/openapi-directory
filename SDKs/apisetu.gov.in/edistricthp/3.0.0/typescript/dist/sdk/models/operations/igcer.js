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
exports.IgcerResponse = exports.IgcerRequest = exports.Igcer504ApplicationJson = exports.Igcer504ApplicationJsonErrorDescriptionEnum = exports.Igcer504ApplicationJsonErrorEnum = exports.Igcer503ApplicationJson = exports.Igcer503ApplicationJsonErrorDescriptionEnum = exports.Igcer503ApplicationJsonErrorEnum = exports.Igcer502ApplicationJson = exports.Igcer502ApplicationJsonErrorDescriptionEnum = exports.Igcer502ApplicationJsonErrorEnum = exports.Igcer500ApplicationJson = exports.Igcer500ApplicationJsonErrorDescriptionEnum = exports.Igcer500ApplicationJsonErrorEnum = exports.Igcer404ApplicationJson = exports.Igcer404ApplicationJsonErrorDescriptionEnum = exports.Igcer404ApplicationJsonErrorEnum = exports.Igcer401ApplicationJson = exports.Igcer401ApplicationJsonErrorDescriptionEnum = exports.Igcer401ApplicationJsonErrorEnum = exports.Igcer400ApplicationJson = exports.Igcer400ApplicationJsonErrorDescriptionEnum = exports.Igcer400ApplicationJsonErrorEnum = exports.IgcerSecurity = exports.IgcerRequestBody = exports.IgcerRequestBodyFormatEnum = exports.IgcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var IgcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(IgcerRequestBodyCertificateParameters, _super);
    function IgcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], IgcerRequestBodyCertificateParameters.prototype, "udf1", void 0);
    return IgcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.IgcerRequestBodyCertificateParameters = IgcerRequestBodyCertificateParameters;
var IgcerRequestBodyFormatEnum;
(function (IgcerRequestBodyFormatEnum) {
    IgcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(IgcerRequestBodyFormatEnum = exports.IgcerRequestBodyFormatEnum || (exports.IgcerRequestBodyFormatEnum = {}));
var IgcerRequestBody = /** @class */ (function (_super) {
    __extends(IgcerRequestBody, _super);
    function IgcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", IgcerRequestBodyCertificateParameters)
    ], IgcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], IgcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], IgcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], IgcerRequestBody.prototype, "txnId", void 0);
    return IgcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.IgcerRequestBody = IgcerRequestBody;
var IgcerSecurity = /** @class */ (function (_super) {
    __extends(IgcerSecurity, _super);
    function IgcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], IgcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], IgcerSecurity.prototype, "clientId", void 0);
    return IgcerSecurity;
}(utils_1.SpeakeasyBase));
exports.IgcerSecurity = IgcerSecurity;
var Igcer400ApplicationJsonErrorEnum;
(function (Igcer400ApplicationJsonErrorEnum) {
    Igcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Igcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Igcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Igcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Igcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Igcer400ApplicationJsonErrorEnum = exports.Igcer400ApplicationJsonErrorEnum || (exports.Igcer400ApplicationJsonErrorEnum = {}));
var Igcer400ApplicationJsonErrorDescriptionEnum;
(function (Igcer400ApplicationJsonErrorDescriptionEnum) {
    Igcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Igcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Igcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Igcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Igcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Igcer400ApplicationJsonErrorDescriptionEnum = exports.Igcer400ApplicationJsonErrorDescriptionEnum || (exports.Igcer400ApplicationJsonErrorDescriptionEnum = {}));
var Igcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Igcer400ApplicationJson, _super);
    function Igcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Igcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Igcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Igcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Igcer400ApplicationJson = Igcer400ApplicationJson;
var Igcer401ApplicationJsonErrorEnum;
(function (Igcer401ApplicationJsonErrorEnum) {
    Igcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Igcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Igcer401ApplicationJsonErrorEnum = exports.Igcer401ApplicationJsonErrorEnum || (exports.Igcer401ApplicationJsonErrorEnum = {}));
var Igcer401ApplicationJsonErrorDescriptionEnum;
(function (Igcer401ApplicationJsonErrorDescriptionEnum) {
    Igcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Igcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Igcer401ApplicationJsonErrorDescriptionEnum = exports.Igcer401ApplicationJsonErrorDescriptionEnum || (exports.Igcer401ApplicationJsonErrorDescriptionEnum = {}));
var Igcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Igcer401ApplicationJson, _super);
    function Igcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Igcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Igcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Igcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Igcer401ApplicationJson = Igcer401ApplicationJson;
var Igcer404ApplicationJsonErrorEnum;
(function (Igcer404ApplicationJsonErrorEnum) {
    Igcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Igcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Igcer404ApplicationJsonErrorEnum = exports.Igcer404ApplicationJsonErrorEnum || (exports.Igcer404ApplicationJsonErrorEnum = {}));
var Igcer404ApplicationJsonErrorDescriptionEnum;
(function (Igcer404ApplicationJsonErrorDescriptionEnum) {
    Igcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Igcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Igcer404ApplicationJsonErrorDescriptionEnum = exports.Igcer404ApplicationJsonErrorDescriptionEnum || (exports.Igcer404ApplicationJsonErrorDescriptionEnum = {}));
var Igcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Igcer404ApplicationJson, _super);
    function Igcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Igcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Igcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Igcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Igcer404ApplicationJson = Igcer404ApplicationJson;
var Igcer500ApplicationJsonErrorEnum;
(function (Igcer500ApplicationJsonErrorEnum) {
    Igcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Igcer500ApplicationJsonErrorEnum = exports.Igcer500ApplicationJsonErrorEnum || (exports.Igcer500ApplicationJsonErrorEnum = {}));
var Igcer500ApplicationJsonErrorDescriptionEnum;
(function (Igcer500ApplicationJsonErrorDescriptionEnum) {
    Igcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Igcer500ApplicationJsonErrorDescriptionEnum = exports.Igcer500ApplicationJsonErrorDescriptionEnum || (exports.Igcer500ApplicationJsonErrorDescriptionEnum = {}));
var Igcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Igcer500ApplicationJson, _super);
    function Igcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Igcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Igcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Igcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Igcer500ApplicationJson = Igcer500ApplicationJson;
var Igcer502ApplicationJsonErrorEnum;
(function (Igcer502ApplicationJsonErrorEnum) {
    Igcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Igcer502ApplicationJsonErrorEnum = exports.Igcer502ApplicationJsonErrorEnum || (exports.Igcer502ApplicationJsonErrorEnum = {}));
var Igcer502ApplicationJsonErrorDescriptionEnum;
(function (Igcer502ApplicationJsonErrorDescriptionEnum) {
    Igcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Igcer502ApplicationJsonErrorDescriptionEnum = exports.Igcer502ApplicationJsonErrorDescriptionEnum || (exports.Igcer502ApplicationJsonErrorDescriptionEnum = {}));
var Igcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Igcer502ApplicationJson, _super);
    function Igcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Igcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Igcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Igcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Igcer502ApplicationJson = Igcer502ApplicationJson;
var Igcer503ApplicationJsonErrorEnum;
(function (Igcer503ApplicationJsonErrorEnum) {
    Igcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Igcer503ApplicationJsonErrorEnum = exports.Igcer503ApplicationJsonErrorEnum || (exports.Igcer503ApplicationJsonErrorEnum = {}));
var Igcer503ApplicationJsonErrorDescriptionEnum;
(function (Igcer503ApplicationJsonErrorDescriptionEnum) {
    Igcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Igcer503ApplicationJsonErrorDescriptionEnum = exports.Igcer503ApplicationJsonErrorDescriptionEnum || (exports.Igcer503ApplicationJsonErrorDescriptionEnum = {}));
var Igcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Igcer503ApplicationJson, _super);
    function Igcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Igcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Igcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Igcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Igcer503ApplicationJson = Igcer503ApplicationJson;
var Igcer504ApplicationJsonErrorEnum;
(function (Igcer504ApplicationJsonErrorEnum) {
    Igcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Igcer504ApplicationJsonErrorEnum = exports.Igcer504ApplicationJsonErrorEnum || (exports.Igcer504ApplicationJsonErrorEnum = {}));
var Igcer504ApplicationJsonErrorDescriptionEnum;
(function (Igcer504ApplicationJsonErrorDescriptionEnum) {
    Igcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Igcer504ApplicationJsonErrorDescriptionEnum = exports.Igcer504ApplicationJsonErrorDescriptionEnum || (exports.Igcer504ApplicationJsonErrorDescriptionEnum = {}));
var Igcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Igcer504ApplicationJson, _super);
    function Igcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Igcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Igcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Igcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Igcer504ApplicationJson = Igcer504ApplicationJson;
var IgcerRequest = /** @class */ (function (_super) {
    __extends(IgcerRequest, _super);
    function IgcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", IgcerRequestBody)
    ], IgcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", IgcerSecurity)
    ], IgcerRequest.prototype, "security", void 0);
    return IgcerRequest;
}(utils_1.SpeakeasyBase));
exports.IgcerRequest = IgcerRequest;
var IgcerResponse = /** @class */ (function (_super) {
    __extends(IgcerResponse, _super);
    function IgcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], IgcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], IgcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Igcer400ApplicationJson)
    ], IgcerResponse.prototype, "igcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Igcer401ApplicationJson)
    ], IgcerResponse.prototype, "igcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Igcer404ApplicationJson)
    ], IgcerResponse.prototype, "igcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Igcer500ApplicationJson)
    ], IgcerResponse.prototype, "igcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Igcer502ApplicationJson)
    ], IgcerResponse.prototype, "igcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Igcer503ApplicationJson)
    ], IgcerResponse.prototype, "igcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Igcer504ApplicationJson)
    ], IgcerResponse.prototype, "igcer504ApplicationJSONObject", void 0);
    return IgcerResponse;
}(utils_1.SpeakeasyBase));
exports.IgcerResponse = IgcerResponse;
