import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostBanksCategoriesRequestBody extends SpeakeasyBase {
    /**
     * name of the category to be created
     */
    name: string;
}
export declare class PostBanksCategoriesRequest extends SpeakeasyBase {
    requestBody: PostBanksCategoriesRequestBody;
    expand?: string;
}
export declare class PostBanksCategoriesResponse extends SpeakeasyBase {
    /**
     * Successful POST on ConnectorCategory resource
     */
    connectorCategory?: shared.ConnectorCategory;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
