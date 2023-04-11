import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteProductMemberRequest extends SpeakeasyBase {
    /**
     * The identifier of the Product.
     */
    productId: string;
    /**
     * The identifier of the Member.
     */
    userId: string;
}
export declare class DeleteProductMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
