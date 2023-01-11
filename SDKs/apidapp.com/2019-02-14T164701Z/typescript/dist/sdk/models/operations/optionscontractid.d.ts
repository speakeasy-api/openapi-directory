import { SpeakeasyBase } from "../../../internal/utils";
export declare class OptionsContractIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class OptionsContractIdRequest extends SpeakeasyBase {
    pathParams: OptionsContractIdPathParams;
}
export declare class OptionsContractIdResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
