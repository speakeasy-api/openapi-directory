import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CodesOfConduct {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * codesOfConductGetAllCodesOfConduct - Get all codes of conduct
     *
     * https://docs.github.com/rest/reference/codes_of_conduct/#get-all-codes-of-conduct - API method documentation
    **/
    codesOfConductGetAllCodesOfConduct(config?: AxiosRequestConfig): Promise<operations.CodesOfConductGetAllCodesOfConductResponse>;
    /**
     * codesOfConductGetConductCode - Get a code of conduct
     *
     * https://docs.github.com/rest/reference/codes_of_conduct/#get-a-code-of-conduct - API method documentation
    **/
    codesOfConductGetConductCode(req: operations.CodesOfConductGetConductCodeRequest, config?: AxiosRequestConfig): Promise<operations.CodesOfConductGetConductCodeResponse>;
    /**
     * codesOfConductGetForRepo - Get the code of conduct for a repository
     *
     * Returns the contents of the repository's code of conduct file, if one is detected.
     *
     * A code of conduct is detected if there is a file named `CODE_OF_CONDUCT` in the root directory of the repository. GitHub detects which code of conduct it is using fuzzy matching.
     *
     * https://docs.github.com/rest/reference/codes_of_conduct/#get-the-code-of-conduct-for-a-repository - API method documentation
    **/
    codesOfConductGetForRepo(req: operations.CodesOfConductGetForRepoRequest, config?: AxiosRequestConfig): Promise<operations.CodesOfConductGetForRepoResponse>;
}
