import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyDefinitionsRecordsDestinyRecordDefinition } from "./destinydefinitionsrecordsdestinyrecorddefinition";
import { TokensCollectibleDefinitions } from "./tokenscollectibledefinitions";
export declare class TokensRewardAvailabilityModel extends SpeakeasyBase {
    collectibleDefinitions?: TokensCollectibleDefinitions[];
    decryptedToken?: string;
    gameEarnByDate?: Date;
    hasExistingCode?: boolean;
    hasOffer?: boolean;
    isLoyaltyReward?: boolean;
    isOffer?: boolean;
    offerApplied?: boolean;
    recordDefinitions?: DestinyDefinitionsRecordsDestinyRecordDefinition[];
    redemptionEndDate?: Date;
    shopifyEndDate?: Date;
}
