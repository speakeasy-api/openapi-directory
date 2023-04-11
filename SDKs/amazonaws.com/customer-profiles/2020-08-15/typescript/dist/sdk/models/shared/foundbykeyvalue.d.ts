import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A data type pair that consists of a <code>KeyName</code> and <code>Values</code> list that were used to find a profile returned in response to a <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html">SearchProfiles</a> request.
 */
export declare class FoundByKeyValue extends SpeakeasyBase {
    keyName?: string;
    values?: string[];
}
