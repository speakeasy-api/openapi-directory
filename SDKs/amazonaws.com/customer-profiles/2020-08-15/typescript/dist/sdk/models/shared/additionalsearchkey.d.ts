import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A data type pair that consists of a <code>KeyName</code> and <code>Values</code> list that is used in conjunction with the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html#customerprofiles-SearchProfiles-request-KeyName">KeyName</a> and <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html#customerprofiles-SearchProfiles-request-Values">Values</a> parameters to search for profiles using the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html">SearchProfiles</a> API.
 */
export declare class AdditionalSearchKey extends SpeakeasyBase {
    keyName: string;
    values: string[];
}
