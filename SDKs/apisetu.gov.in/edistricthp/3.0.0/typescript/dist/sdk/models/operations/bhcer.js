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
exports.BhcerResponse = exports.BhcerRequest = exports.Bhcer504ApplicationJson = exports.Bhcer504ApplicationJsonErrorDescriptionEnum = exports.Bhcer504ApplicationJsonErrorEnum = exports.Bhcer503ApplicationJson = exports.Bhcer503ApplicationJsonErrorDescriptionEnum = exports.Bhcer503ApplicationJsonErrorEnum = exports.Bhcer502ApplicationJson = exports.Bhcer502ApplicationJsonErrorDescriptionEnum = exports.Bhcer502ApplicationJsonErrorEnum = exports.Bhcer500ApplicationJson = exports.Bhcer500ApplicationJsonErrorDescriptionEnum = exports.Bhcer500ApplicationJsonErrorEnum = exports.Bhcer404ApplicationJson = exports.Bhcer404ApplicationJsonErrorDescriptionEnum = exports.Bhcer404ApplicationJsonErrorEnum = exports.Bhcer401ApplicationJson = exports.Bhcer401ApplicationJsonErrorDescriptionEnum = exports.Bhcer401ApplicationJsonErrorEnum = exports.Bhcer400ApplicationJson = exports.Bhcer400ApplicationJsonErrorDescriptionEnum = exports.Bhcer400ApplicationJsonErrorEnum = exports.BhcerSecurity = exports.BhcerRequestBody = exports.BhcerRequestBodyFormatEnum = exports.BhcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var BhcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(BhcerRequestBodyCertificateParameters, _super);
    function BhcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], BhcerRequestBodyCertificateParameters.prototype, "udf1", void 0);
    return BhcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.BhcerRequestBodyCertificateParameters = BhcerRequestBodyCertificateParameters;
var BhcerRequestBodyFormatEnum;
(function (BhcerRequestBodyFormatEnum) {
    BhcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(BhcerRequestBodyFormatEnum = exports.BhcerRequestBodyFormatEnum || (exports.BhcerRequestBodyFormatEnum = {}));
var BhcerRequestBody = /** @class */ (function (_super) {
    __extends(BhcerRequestBody, _super);
    function BhcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", BhcerRequestBodyCertificateParameters)
    ], BhcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], BhcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], BhcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], BhcerRequestBody.prototype, "txnId", void 0);
    return BhcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.BhcerRequestBody = BhcerRequestBody;
var BhcerSecurity = /** @class */ (function (_super) {
    __extends(BhcerSecurity, _super);
    function BhcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], BhcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], BhcerSecurity.prototype, "clientId", void 0);
    return BhcerSecurity;
}(utils_1.SpeakeasyBase));
exports.BhcerSecurity = BhcerSecurity;
var Bhcer400ApplicationJsonErrorEnum;
(function (Bhcer400ApplicationJsonErrorEnum) {
    Bhcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Bhcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Bhcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Bhcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Bhcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Bhcer400ApplicationJsonErrorEnum = exports.Bhcer400ApplicationJsonErrorEnum || (exports.Bhcer400ApplicationJsonErrorEnum = {}));
var Bhcer400ApplicationJsonErrorDescriptionEnum;
(function (Bhcer400ApplicationJsonErrorDescriptionEnum) {
    Bhcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Bhcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Bhcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Bhcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Bhcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Bhcer400ApplicationJsonErrorDescriptionEnum = exports.Bhcer400ApplicationJsonErrorDescriptionEnum || (exports.Bhcer400ApplicationJsonErrorDescriptionEnum = {}));
var Bhcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Bhcer400ApplicationJson, _super);
    function Bhcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bhcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bhcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Bhcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Bhcer400ApplicationJson = Bhcer400ApplicationJson;
var Bhcer401ApplicationJsonErrorEnum;
(function (Bhcer401ApplicationJsonErrorEnum) {
    Bhcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Bhcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Bhcer401ApplicationJsonErrorEnum = exports.Bhcer401ApplicationJsonErrorEnum || (exports.Bhcer401ApplicationJsonErrorEnum = {}));
var Bhcer401ApplicationJsonErrorDescriptionEnum;
(function (Bhcer401ApplicationJsonErrorDescriptionEnum) {
    Bhcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Bhcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Bhcer401ApplicationJsonErrorDescriptionEnum = exports.Bhcer401ApplicationJsonErrorDescriptionEnum || (exports.Bhcer401ApplicationJsonErrorDescriptionEnum = {}));
var Bhcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Bhcer401ApplicationJson, _super);
    function Bhcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bhcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bhcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Bhcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Bhcer401ApplicationJson = Bhcer401ApplicationJson;
var Bhcer404ApplicationJsonErrorEnum;
(function (Bhcer404ApplicationJsonErrorEnum) {
    Bhcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Bhcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Bhcer404ApplicationJsonErrorEnum = exports.Bhcer404ApplicationJsonErrorEnum || (exports.Bhcer404ApplicationJsonErrorEnum = {}));
var Bhcer404ApplicationJsonErrorDescriptionEnum;
(function (Bhcer404ApplicationJsonErrorDescriptionEnum) {
    Bhcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Bhcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Bhcer404ApplicationJsonErrorDescriptionEnum = exports.Bhcer404ApplicationJsonErrorDescriptionEnum || (exports.Bhcer404ApplicationJsonErrorDescriptionEnum = {}));
var Bhcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Bhcer404ApplicationJson, _super);
    function Bhcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bhcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bhcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Bhcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Bhcer404ApplicationJson = Bhcer404ApplicationJson;
var Bhcer500ApplicationJsonErrorEnum;
(function (Bhcer500ApplicationJsonErrorEnum) {
    Bhcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Bhcer500ApplicationJsonErrorEnum = exports.Bhcer500ApplicationJsonErrorEnum || (exports.Bhcer500ApplicationJsonErrorEnum = {}));
var Bhcer500ApplicationJsonErrorDescriptionEnum;
(function (Bhcer500ApplicationJsonErrorDescriptionEnum) {
    Bhcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Bhcer500ApplicationJsonErrorDescriptionEnum = exports.Bhcer500ApplicationJsonErrorDescriptionEnum || (exports.Bhcer500ApplicationJsonErrorDescriptionEnum = {}));
var Bhcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Bhcer500ApplicationJson, _super);
    function Bhcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bhcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bhcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Bhcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Bhcer500ApplicationJson = Bhcer500ApplicationJson;
var Bhcer502ApplicationJsonErrorEnum;
(function (Bhcer502ApplicationJsonErrorEnum) {
    Bhcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Bhcer502ApplicationJsonErrorEnum = exports.Bhcer502ApplicationJsonErrorEnum || (exports.Bhcer502ApplicationJsonErrorEnum = {}));
var Bhcer502ApplicationJsonErrorDescriptionEnum;
(function (Bhcer502ApplicationJsonErrorDescriptionEnum) {
    Bhcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Bhcer502ApplicationJsonErrorDescriptionEnum = exports.Bhcer502ApplicationJsonErrorDescriptionEnum || (exports.Bhcer502ApplicationJsonErrorDescriptionEnum = {}));
var Bhcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Bhcer502ApplicationJson, _super);
    function Bhcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bhcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bhcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Bhcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Bhcer502ApplicationJson = Bhcer502ApplicationJson;
var Bhcer503ApplicationJsonErrorEnum;
(function (Bhcer503ApplicationJsonErrorEnum) {
    Bhcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Bhcer503ApplicationJsonErrorEnum = exports.Bhcer503ApplicationJsonErrorEnum || (exports.Bhcer503ApplicationJsonErrorEnum = {}));
var Bhcer503ApplicationJsonErrorDescriptionEnum;
(function (Bhcer503ApplicationJsonErrorDescriptionEnum) {
    Bhcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Bhcer503ApplicationJsonErrorDescriptionEnum = exports.Bhcer503ApplicationJsonErrorDescriptionEnum || (exports.Bhcer503ApplicationJsonErrorDescriptionEnum = {}));
var Bhcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Bhcer503ApplicationJson, _super);
    function Bhcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bhcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bhcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Bhcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Bhcer503ApplicationJson = Bhcer503ApplicationJson;
var Bhcer504ApplicationJsonErrorEnum;
(function (Bhcer504ApplicationJsonErrorEnum) {
    Bhcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Bhcer504ApplicationJsonErrorEnum = exports.Bhcer504ApplicationJsonErrorEnum || (exports.Bhcer504ApplicationJsonErrorEnum = {}));
var Bhcer504ApplicationJsonErrorDescriptionEnum;
(function (Bhcer504ApplicationJsonErrorDescriptionEnum) {
    Bhcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Bhcer504ApplicationJsonErrorDescriptionEnum = exports.Bhcer504ApplicationJsonErrorDescriptionEnum || (exports.Bhcer504ApplicationJsonErrorDescriptionEnum = {}));
var Bhcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Bhcer504ApplicationJson, _super);
    function Bhcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bhcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bhcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Bhcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Bhcer504ApplicationJson = Bhcer504ApplicationJson;
var BhcerRequest = /** @class */ (function (_super) {
    __extends(BhcerRequest, _super);
    function BhcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", BhcerRequestBody)
    ], BhcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", BhcerSecurity)
    ], BhcerRequest.prototype, "security", void 0);
    return BhcerRequest;
}(utils_1.SpeakeasyBase));
exports.BhcerRequest = BhcerRequest;
var BhcerResponse = /** @class */ (function (_super) {
    __extends(BhcerResponse, _super);
    function BhcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], BhcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], BhcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Bhcer400ApplicationJson)
    ], BhcerResponse.prototype, "bhcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Bhcer401ApplicationJson)
    ], BhcerResponse.prototype, "bhcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Bhcer404ApplicationJson)
    ], BhcerResponse.prototype, "bhcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Bhcer500ApplicationJson)
    ], BhcerResponse.prototype, "bhcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Bhcer502ApplicationJson)
    ], BhcerResponse.prototype, "bhcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Bhcer503ApplicationJson)
    ], BhcerResponse.prototype, "bhcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Bhcer504ApplicationJson)
    ], BhcerResponse.prototype, "bhcer504ApplicationJSONObject", void 0);
    return BhcerResponse;
}(utils_1.SpeakeasyBase));
exports.BhcerResponse = BhcerResponse;
