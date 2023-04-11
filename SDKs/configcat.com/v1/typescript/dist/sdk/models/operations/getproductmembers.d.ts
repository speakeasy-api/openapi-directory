import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProductMembersRequest extends SpeakeasyBase {
    /**
     * The identifier of the Product.
     */
    productId: string;
}
export declare class GetProductMembersResponse extends SpeakeasyBase {
    contentType: string;
    memberModels?: shared.MemberModel[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
