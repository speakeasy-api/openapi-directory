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
exports.BacerResponse = exports.BacerRequest = exports.Bacer504ApplicationJson = exports.Bacer504ApplicationJsonErrorDescriptionEnum = exports.Bacer504ApplicationJsonErrorEnum = exports.Bacer503ApplicationJson = exports.Bacer503ApplicationJsonErrorDescriptionEnum = exports.Bacer503ApplicationJsonErrorEnum = exports.Bacer502ApplicationJson = exports.Bacer502ApplicationJsonErrorDescriptionEnum = exports.Bacer502ApplicationJsonErrorEnum = exports.Bacer500ApplicationJson = exports.Bacer500ApplicationJsonErrorDescriptionEnum = exports.Bacer500ApplicationJsonErrorEnum = exports.Bacer404ApplicationJson = exports.Bacer404ApplicationJsonErrorDescriptionEnum = exports.Bacer404ApplicationJsonErrorEnum = exports.Bacer401ApplicationJson = exports.Bacer401ApplicationJsonErrorDescriptionEnum = exports.Bacer401ApplicationJsonErrorEnum = exports.Bacer400ApplicationJson = exports.Bacer400ApplicationJsonErrorDescriptionEnum = exports.Bacer400ApplicationJsonErrorEnum = exports.BacerSecurity = exports.BacerRequestBody = exports.BacerRequestBodyFormatEnum = exports.BacerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var BacerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(BacerRequestBodyCertificateParameters, _super);
    function BacerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], BacerRequestBodyCertificateParameters.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], BacerRequestBodyCertificateParameters.prototype, "refNo", void 0);
    return BacerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.BacerRequestBodyCertificateParameters = BacerRequestBodyCertificateParameters;
var BacerRequestBodyFormatEnum;
(function (BacerRequestBodyFormatEnum) {
    BacerRequestBodyFormatEnum["Pdf"] = "pdf";
})(BacerRequestBodyFormatEnum = exports.BacerRequestBodyFormatEnum || (exports.BacerRequestBodyFormatEnum = {}));
var BacerRequestBody = /** @class */ (function (_super) {
    __extends(BacerRequestBody, _super);
    function BacerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", BacerRequestBodyCertificateParameters)
    ], BacerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], BacerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], BacerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], BacerRequestBody.prototype, "txnId", void 0);
    return BacerRequestBody;
}(utils_1.SpeakeasyBase));
exports.BacerRequestBody = BacerRequestBody;
var BacerSecurity = /** @class */ (function (_super) {
    __extends(BacerSecurity, _super);
    function BacerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], BacerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], BacerSecurity.prototype, "clientId", void 0);
    return BacerSecurity;
}(utils_1.SpeakeasyBase));
exports.BacerSecurity = BacerSecurity;
var Bacer400ApplicationJsonErrorEnum;
(function (Bacer400ApplicationJsonErrorEnum) {
    Bacer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Bacer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Bacer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Bacer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Bacer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Bacer400ApplicationJsonErrorEnum = exports.Bacer400ApplicationJsonErrorEnum || (exports.Bacer400ApplicationJsonErrorEnum = {}));
var Bacer400ApplicationJsonErrorDescriptionEnum;
(function (Bacer400ApplicationJsonErrorDescriptionEnum) {
    Bacer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Bacer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Bacer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Bacer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Bacer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Bacer400ApplicationJsonErrorDescriptionEnum = exports.Bacer400ApplicationJsonErrorDescriptionEnum || (exports.Bacer400ApplicationJsonErrorDescriptionEnum = {}));
var Bacer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Bacer400ApplicationJson, _super);
    function Bacer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bacer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bacer400ApplicationJson.prototype, "errorDescription", void 0);
    return Bacer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Bacer400ApplicationJson = Bacer400ApplicationJson;
var Bacer401ApplicationJsonErrorEnum;
(function (Bacer401ApplicationJsonErrorEnum) {
    Bacer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Bacer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Bacer401ApplicationJsonErrorEnum = exports.Bacer401ApplicationJsonErrorEnum || (exports.Bacer401ApplicationJsonErrorEnum = {}));
var Bacer401ApplicationJsonErrorDescriptionEnum;
(function (Bacer401ApplicationJsonErrorDescriptionEnum) {
    Bacer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Bacer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Bacer401ApplicationJsonErrorDescriptionEnum = exports.Bacer401ApplicationJsonErrorDescriptionEnum || (exports.Bacer401ApplicationJsonErrorDescriptionEnum = {}));
var Bacer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Bacer401ApplicationJson, _super);
    function Bacer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bacer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bacer401ApplicationJson.prototype, "errorDescription", void 0);
    return Bacer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Bacer401ApplicationJson = Bacer401ApplicationJson;
var Bacer404ApplicationJsonErrorEnum;
(function (Bacer404ApplicationJsonErrorEnum) {
    Bacer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Bacer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Bacer404ApplicationJsonErrorEnum = exports.Bacer404ApplicationJsonErrorEnum || (exports.Bacer404ApplicationJsonErrorEnum = {}));
var Bacer404ApplicationJsonErrorDescriptionEnum;
(function (Bacer404ApplicationJsonErrorDescriptionEnum) {
    Bacer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Bacer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Bacer404ApplicationJsonErrorDescriptionEnum = exports.Bacer404ApplicationJsonErrorDescriptionEnum || (exports.Bacer404ApplicationJsonErrorDescriptionEnum = {}));
var Bacer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Bacer404ApplicationJson, _super);
    function Bacer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bacer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bacer404ApplicationJson.prototype, "errorDescription", void 0);
    return Bacer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Bacer404ApplicationJson = Bacer404ApplicationJson;
var Bacer500ApplicationJsonErrorEnum;
(function (Bacer500ApplicationJsonErrorEnum) {
    Bacer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Bacer500ApplicationJsonErrorEnum = exports.Bacer500ApplicationJsonErrorEnum || (exports.Bacer500ApplicationJsonErrorEnum = {}));
var Bacer500ApplicationJsonErrorDescriptionEnum;
(function (Bacer500ApplicationJsonErrorDescriptionEnum) {
    Bacer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Bacer500ApplicationJsonErrorDescriptionEnum = exports.Bacer500ApplicationJsonErrorDescriptionEnum || (exports.Bacer500ApplicationJsonErrorDescriptionEnum = {}));
var Bacer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Bacer500ApplicationJson, _super);
    function Bacer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bacer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bacer500ApplicationJson.prototype, "errorDescription", void 0);
    return Bacer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Bacer500ApplicationJson = Bacer500ApplicationJson;
var Bacer502ApplicationJsonErrorEnum;
(function (Bacer502ApplicationJsonErrorEnum) {
    Bacer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Bacer502ApplicationJsonErrorEnum = exports.Bacer502ApplicationJsonErrorEnum || (exports.Bacer502ApplicationJsonErrorEnum = {}));
var Bacer502ApplicationJsonErrorDescriptionEnum;
(function (Bacer502ApplicationJsonErrorDescriptionEnum) {
    Bacer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Bacer502ApplicationJsonErrorDescriptionEnum = exports.Bacer502ApplicationJsonErrorDescriptionEnum || (exports.Bacer502ApplicationJsonErrorDescriptionEnum = {}));
var Bacer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Bacer502ApplicationJson, _super);
    function Bacer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bacer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bacer502ApplicationJson.prototype, "errorDescription", void 0);
    return Bacer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Bacer502ApplicationJson = Bacer502ApplicationJson;
var Bacer503ApplicationJsonErrorEnum;
(function (Bacer503ApplicationJsonErrorEnum) {
    Bacer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Bacer503ApplicationJsonErrorEnum = exports.Bacer503ApplicationJsonErrorEnum || (exports.Bacer503ApplicationJsonErrorEnum = {}));
var Bacer503ApplicationJsonErrorDescriptionEnum;
(function (Bacer503ApplicationJsonErrorDescriptionEnum) {
    Bacer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Bacer503ApplicationJsonErrorDescriptionEnum = exports.Bacer503ApplicationJsonErrorDescriptionEnum || (exports.Bacer503ApplicationJsonErrorDescriptionEnum = {}));
var Bacer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Bacer503ApplicationJson, _super);
    function Bacer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bacer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bacer503ApplicationJson.prototype, "errorDescription", void 0);
    return Bacer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Bacer503ApplicationJson = Bacer503ApplicationJson;
var Bacer504ApplicationJsonErrorEnum;
(function (Bacer504ApplicationJsonErrorEnum) {
    Bacer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Bacer504ApplicationJsonErrorEnum = exports.Bacer504ApplicationJsonErrorEnum || (exports.Bacer504ApplicationJsonErrorEnum = {}));
var Bacer504ApplicationJsonErrorDescriptionEnum;
(function (Bacer504ApplicationJsonErrorDescriptionEnum) {
    Bacer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Bacer504ApplicationJsonErrorDescriptionEnum = exports.Bacer504ApplicationJsonErrorDescriptionEnum || (exports.Bacer504ApplicationJsonErrorDescriptionEnum = {}));
var Bacer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Bacer504ApplicationJson, _super);
    function Bacer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bacer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bacer504ApplicationJson.prototype, "errorDescription", void 0);
    return Bacer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Bacer504ApplicationJson = Bacer504ApplicationJson;
var BacerRequest = /** @class */ (function (_super) {
    __extends(BacerRequest, _super);
    function BacerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", BacerRequestBody)
    ], BacerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", BacerSecurity)
    ], BacerRequest.prototype, "security", void 0);
    return BacerRequest;
}(utils_1.SpeakeasyBase));
exports.BacerRequest = BacerRequest;
var BacerResponse = /** @class */ (function (_super) {
    __extends(BacerResponse, _super);
    function BacerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], BacerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], BacerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Bacer400ApplicationJson)
    ], BacerResponse.prototype, "bacer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Bacer401ApplicationJson)
    ], BacerResponse.prototype, "bacer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Bacer404ApplicationJson)
    ], BacerResponse.prototype, "bacer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Bacer500ApplicationJson)
    ], BacerResponse.prototype, "bacer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Bacer502ApplicationJson)
    ], BacerResponse.prototype, "bacer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Bacer503ApplicationJson)
    ], BacerResponse.prototype, "bacer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Bacer504ApplicationJson)
    ], BacerResponse.prototype, "bacer504ApplicationJSONObject", void 0);
    return BacerResponse;
}(utils_1.SpeakeasyBase));
exports.BacerResponse = BacerResponse;
