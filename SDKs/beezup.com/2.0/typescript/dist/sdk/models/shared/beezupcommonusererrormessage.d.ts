import { SpeakeasyBase } from "../../../internal/utils";
export declare class BeezUpCommonUserErrorMessageArguments extends SpeakeasyBase {
    name: string;
    value: Record<string, any>;
}
export declare class BeezUpCommonUserErrorMessage extends SpeakeasyBase {
    arguments?: BeezUpCommonUserErrorMessageArguments[];
    code: string;
    cultureName?: string;
    docUrl?: string;
    message: string;
}
