import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CompanyCredits {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * companyCreditsSearchRead - Return company credits search result
     *
     * Return company credits search result
     *
     * ### Response Class (Status 200)
     *
     * * __{movie_title}__: Used as a key word to search company credits for the movie
     * * You can use both Amharic or English charset/font to search
     *
     * For more details on how company credits are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    companyCreditsSearchRead(req: operations.CompanyCreditsSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.CompanyCreditsSearchReadResponse>;
    /**
     * companyCreditsSearchallRead - Return company credits search result
     *
     * Return company credits search result
     *
     * ### Response Class (Status 200)
     * __{param}__ argument can be
     * * company name
     * * movie title or
     * * company credit description (such as production, cinematography, etc)
     *
     * For more details on how company credits are listed [see here][ref].
     * [ref]: https://etmdb.com/en/company-list/company_name
    **/
    companyCreditsSearchallRead(req: operations.CompanyCreditsSearchallReadRequest, config?: AxiosRequestConfig): Promise<operations.CompanyCreditsSearchallReadResponse>;
}
