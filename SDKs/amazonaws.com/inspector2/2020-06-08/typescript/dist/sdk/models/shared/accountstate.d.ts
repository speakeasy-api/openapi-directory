import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceState } from "./resourcestate";
import { State } from "./state";
/**
 * An object with details the status of an Amazon Web Services account within your Amazon Inspector environment.
 */
export declare class AccountState extends SpeakeasyBase {
    accountId: string;
    resourceState: ResourceState;
    state: State;
}
