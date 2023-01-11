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
exports.GicerResponse = exports.GicerRequest = exports.Gicer504ApplicationJson = exports.Gicer504ApplicationJsonErrorDescriptionEnum = exports.Gicer504ApplicationJsonErrorEnum = exports.Gicer503ApplicationJson = exports.Gicer503ApplicationJsonErrorDescriptionEnum = exports.Gicer503ApplicationJsonErrorEnum = exports.Gicer502ApplicationJson = exports.Gicer502ApplicationJsonErrorDescriptionEnum = exports.Gicer502ApplicationJsonErrorEnum = exports.Gicer500ApplicationJson = exports.Gicer500ApplicationJsonErrorDescriptionEnum = exports.Gicer500ApplicationJsonErrorEnum = exports.Gicer404ApplicationJson = exports.Gicer404ApplicationJsonErrorDescriptionEnum = exports.Gicer404ApplicationJsonErrorEnum = exports.Gicer401ApplicationJson = exports.Gicer401ApplicationJsonErrorDescriptionEnum = exports.Gicer401ApplicationJsonErrorEnum = exports.Gicer400ApplicationJson = exports.Gicer400ApplicationJsonErrorDescriptionEnum = exports.Gicer400ApplicationJsonErrorEnum = exports.GicerSecurity = exports.GicerRequestBody = exports.GicerRequestBodyFormatEnum = exports.GicerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GicerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(GicerRequestBodyCertificateParameters, _super);
    function GicerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customer_Id" }),
        __metadata("design:type", String)
    ], GicerRequestBodyCertificateParameters.prototype, "customerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policy_Number" }),
        __metadata("design:type", String)
    ], GicerRequestBodyCertificateParameters.prototype, "policyNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policy_StartDate" }),
        __metadata("design:type", String)
    ], GicerRequestBodyCertificateParameters.prototype, "policyStartDate", void 0);
    return GicerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.GicerRequestBodyCertificateParameters = GicerRequestBodyCertificateParameters;
var GicerRequestBodyFormatEnum;
(function (GicerRequestBodyFormatEnum) {
    GicerRequestBodyFormatEnum["Pdf"] = "pdf";
})(GicerRequestBodyFormatEnum = exports.GicerRequestBodyFormatEnum || (exports.GicerRequestBodyFormatEnum = {}));
var GicerRequestBody = /** @class */ (function (_super) {
    __extends(GicerRequestBody, _super);
    function GicerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", GicerRequestBodyCertificateParameters)
    ], GicerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], GicerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], GicerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], GicerRequestBody.prototype, "txnId", void 0);
    return GicerRequestBody;
}(utils_1.SpeakeasyBase));
exports.GicerRequestBody = GicerRequestBody;
var GicerSecurity = /** @class */ (function (_super) {
    __extends(GicerSecurity, _super);
    function GicerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GicerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], GicerSecurity.prototype, "clientId", void 0);
    return GicerSecurity;
}(utils_1.SpeakeasyBase));
exports.GicerSecurity = GicerSecurity;
var Gicer400ApplicationJsonErrorEnum;
(function (Gicer400ApplicationJsonErrorEnum) {
    Gicer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Gicer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Gicer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Gicer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Gicer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Gicer400ApplicationJsonErrorEnum = exports.Gicer400ApplicationJsonErrorEnum || (exports.Gicer400ApplicationJsonErrorEnum = {}));
var Gicer400ApplicationJsonErrorDescriptionEnum;
(function (Gicer400ApplicationJsonErrorDescriptionEnum) {
    Gicer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Gicer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Gicer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Gicer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Gicer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Gicer400ApplicationJsonErrorDescriptionEnum = exports.Gicer400ApplicationJsonErrorDescriptionEnum || (exports.Gicer400ApplicationJsonErrorDescriptionEnum = {}));
var Gicer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Gicer400ApplicationJson, _super);
    function Gicer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Gicer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Gicer400ApplicationJson.prototype, "errorDescription", void 0);
    return Gicer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Gicer400ApplicationJson = Gicer400ApplicationJson;
var Gicer401ApplicationJsonErrorEnum;
(function (Gicer401ApplicationJsonErrorEnum) {
    Gicer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Gicer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Gicer401ApplicationJsonErrorEnum = exports.Gicer401ApplicationJsonErrorEnum || (exports.Gicer401ApplicationJsonErrorEnum = {}));
var Gicer401ApplicationJsonErrorDescriptionEnum;
(function (Gicer401ApplicationJsonErrorDescriptionEnum) {
    Gicer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Gicer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Gicer401ApplicationJsonErrorDescriptionEnum = exports.Gicer401ApplicationJsonErrorDescriptionEnum || (exports.Gicer401ApplicationJsonErrorDescriptionEnum = {}));
var Gicer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Gicer401ApplicationJson, _super);
    function Gicer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Gicer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Gicer401ApplicationJson.prototype, "errorDescription", void 0);
    return Gicer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Gicer401ApplicationJson = Gicer401ApplicationJson;
var Gicer404ApplicationJsonErrorEnum;
(function (Gicer404ApplicationJsonErrorEnum) {
    Gicer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Gicer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Gicer404ApplicationJsonErrorEnum = exports.Gicer404ApplicationJsonErrorEnum || (exports.Gicer404ApplicationJsonErrorEnum = {}));
var Gicer404ApplicationJsonErrorDescriptionEnum;
(function (Gicer404ApplicationJsonErrorDescriptionEnum) {
    Gicer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Gicer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Gicer404ApplicationJsonErrorDescriptionEnum = exports.Gicer404ApplicationJsonErrorDescriptionEnum || (exports.Gicer404ApplicationJsonErrorDescriptionEnum = {}));
var Gicer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Gicer404ApplicationJson, _super);
    function Gicer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Gicer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Gicer404ApplicationJson.prototype, "errorDescription", void 0);
    return Gicer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Gicer404ApplicationJson = Gicer404ApplicationJson;
var Gicer500ApplicationJsonErrorEnum;
(function (Gicer500ApplicationJsonErrorEnum) {
    Gicer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Gicer500ApplicationJsonErrorEnum = exports.Gicer500ApplicationJsonErrorEnum || (exports.Gicer500ApplicationJsonErrorEnum = {}));
var Gicer500ApplicationJsonErrorDescriptionEnum;
(function (Gicer500ApplicationJsonErrorDescriptionEnum) {
    Gicer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Gicer500ApplicationJsonErrorDescriptionEnum = exports.Gicer500ApplicationJsonErrorDescriptionEnum || (exports.Gicer500ApplicationJsonErrorDescriptionEnum = {}));
var Gicer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Gicer500ApplicationJson, _super);
    function Gicer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Gicer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Gicer500ApplicationJson.prototype, "errorDescription", void 0);
    return Gicer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Gicer500ApplicationJson = Gicer500ApplicationJson;
var Gicer502ApplicationJsonErrorEnum;
(function (Gicer502ApplicationJsonErrorEnum) {
    Gicer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Gicer502ApplicationJsonErrorEnum = exports.Gicer502ApplicationJsonErrorEnum || (exports.Gicer502ApplicationJsonErrorEnum = {}));
var Gicer502ApplicationJsonErrorDescriptionEnum;
(function (Gicer502ApplicationJsonErrorDescriptionEnum) {
    Gicer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Gicer502ApplicationJsonErrorDescriptionEnum = exports.Gicer502ApplicationJsonErrorDescriptionEnum || (exports.Gicer502ApplicationJsonErrorDescriptionEnum = {}));
var Gicer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Gicer502ApplicationJson, _super);
    function Gicer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Gicer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Gicer502ApplicationJson.prototype, "errorDescription", void 0);
    return Gicer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Gicer502ApplicationJson = Gicer502ApplicationJson;
var Gicer503ApplicationJsonErrorEnum;
(function (Gicer503ApplicationJsonErrorEnum) {
    Gicer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Gicer503ApplicationJsonErrorEnum = exports.Gicer503ApplicationJsonErrorEnum || (exports.Gicer503ApplicationJsonErrorEnum = {}));
var Gicer503ApplicationJsonErrorDescriptionEnum;
(function (Gicer503ApplicationJsonErrorDescriptionEnum) {
    Gicer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Gicer503ApplicationJsonErrorDescriptionEnum = exports.Gicer503ApplicationJsonErrorDescriptionEnum || (exports.Gicer503ApplicationJsonErrorDescriptionEnum = {}));
var Gicer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Gicer503ApplicationJson, _super);
    function Gicer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Gicer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Gicer503ApplicationJson.prototype, "errorDescription", void 0);
    return Gicer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Gicer503ApplicationJson = Gicer503ApplicationJson;
var Gicer504ApplicationJsonErrorEnum;
(function (Gicer504ApplicationJsonErrorEnum) {
    Gicer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Gicer504ApplicationJsonErrorEnum = exports.Gicer504ApplicationJsonErrorEnum || (exports.Gicer504ApplicationJsonErrorEnum = {}));
var Gicer504ApplicationJsonErrorDescriptionEnum;
(function (Gicer504ApplicationJsonErrorDescriptionEnum) {
    Gicer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Gicer504ApplicationJsonErrorDescriptionEnum = exports.Gicer504ApplicationJsonErrorDescriptionEnum || (exports.Gicer504ApplicationJsonErrorDescriptionEnum = {}));
var Gicer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Gicer504ApplicationJson, _super);
    function Gicer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Gicer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Gicer504ApplicationJson.prototype, "errorDescription", void 0);
    return Gicer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Gicer504ApplicationJson = Gicer504ApplicationJson;
var GicerRequest = /** @class */ (function (_super) {
    __extends(GicerRequest, _super);
    function GicerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", GicerRequestBody)
    ], GicerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GicerSecurity)
    ], GicerRequest.prototype, "security", void 0);
    return GicerRequest;
}(utils_1.SpeakeasyBase));
exports.GicerRequest = GicerRequest;
var GicerResponse = /** @class */ (function (_super) {
    __extends(GicerResponse, _super);
    function GicerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GicerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GicerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Gicer400ApplicationJson)
    ], GicerResponse.prototype, "gicer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Gicer401ApplicationJson)
    ], GicerResponse.prototype, "gicer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Gicer404ApplicationJson)
    ], GicerResponse.prototype, "gicer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Gicer500ApplicationJson)
    ], GicerResponse.prototype, "gicer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Gicer502ApplicationJson)
    ], GicerResponse.prototype, "gicer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Gicer503ApplicationJson)
    ], GicerResponse.prototype, "gicer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Gicer504ApplicationJson)
    ], GicerResponse.prototype, "gicer504ApplicationJSONObject", void 0);
    return GicerResponse;
}(utils_1.SpeakeasyBase));
exports.GicerResponse = GicerResponse;
