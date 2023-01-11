import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PciComplianceQuestionnairePage {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postGetPciQuestionnaireUrl - Get a link to a PCI compliance questionnaire.
     *
     * Returns a link to a PCI compliance questionnaire that you can send to your account holder.
     *  > You should only use this endpoint if you have a [partner platform setup](https://docs.adyen.com/platforms/platforms-for-partners).
    **/
    postGetPciQuestionnaireUrl(req: operations.PostGetPciQuestionnaireUrlRequest, config?: AxiosRequestConfig): Promise<operations.PostGetPciQuestionnaireUrlResponse>;
}
