import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OwnerTypeGroupsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    pageResultOwnerTypeGroupDto?: shared.PageResultOwnerTypeGroupDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
