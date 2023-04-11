import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPackageManagerServletResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Package Manager Servlet is disabled
     */
    getPackageManagerServlet404TextHTMLString?: string;
    /**
     * Package Manager Servlet is active
     */
    getPackageManagerServlet405TextHTMLString?: string;
}
