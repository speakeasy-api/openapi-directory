/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DestinyComponentsProfilesDestinyProfileTransitoryPartyMember } from "./destinycomponentsprofilesdestinyprofiletransitorypartymember";
import { DestinyComponentsProfilesDestinyProfileTransitoryTrackingEntry } from "./destinycomponentsprofilesdestinyprofiletransitorytrackingentry";

/**
 * If you are playing in an activity, this is some information about it.
 *
 * @remarks
 * Note that we cannot guarantee any of this resembles what ends up in the PGCR in any way. They are sourced by two entirely separate systems with their own logic, and the one we source this data from should be considered non-authoritative in comparison.
 */
export class DestinyComponentsProfilesDestinyProfileTransitoryComponentCurrentActivity extends SpeakeasyBase {
  /**
   * If you're still in it but it "ended" (like when folks are dancing around the loot after they beat a boss), this is when the activity ended.
   */
  @SpeakeasyMetadata()
  endTime?: Date;

  /**
   * If you have human opponents, this is the highest opposing team's score.
   */
  @SpeakeasyMetadata()
  highestOpposingFactionScore?: number;

  /**
   * This is how many human or poorly crafted aimbot opponents you have.
   */
  @SpeakeasyMetadata()
  numberOfOpponents?: number;

  /**
   * This is how many human or poorly crafted aimbots are on your team.
   */
  @SpeakeasyMetadata()
  numberOfPlayers?: number;

  /**
   * This is what our non-authoritative source thought the score was.
   */
  @SpeakeasyMetadata()
  score?: number;

  /**
   * When the activity started.
   */
  @SpeakeasyMetadata()
  startTime?: Date;
}

/**
 * Some basic information about whether you can be joined, how many slots are left etc. Note that this can change quickly, so it may not actually be useful. But perhaps it will be in some use cases?
 */
export class DestinyComponentsProfilesDestinyProfileTransitoryComponentJoinability extends SpeakeasyBase {
  /**
   * Reasons why a person can't join this person's fireteam.
   */
  @SpeakeasyMetadata()
  closedReasons?: number;

  /**
   * The number of slots still available on this person's fireteam.
   */
  @SpeakeasyMetadata()
  openSlots?: number;

  /**
   * Who the person is currently allowing invites from.
   */
  @SpeakeasyMetadata()
  privacySetting?: number;
}

/**
 * This is an experimental set of data that Bungie considers to be "transitory" - information that may be useful for API users, but that is coming from a non-authoritative data source about information that could potentially change at a more frequent pace than Bungie.net will receive updates about it.
 *
 * @remarks
 * This information is provided exclusively for convenience should any of it be useful to users: we provide no guarantees to the accuracy or timeliness of data that comes from this source. Know that this data can potentially be out-of-date or even wrong entirely if the user disconnected from the game or suddenly changed their status before we can receive refreshed data.
 */
export class DestinyComponentsProfilesDestinyProfileTransitoryComponent extends SpeakeasyBase {
  /**
   * If you are in an activity, this is some transitory info about the activity currently being played.
   */
  @SpeakeasyMetadata()
  currentActivity?: DestinyComponentsProfilesDestinyProfileTransitoryComponentCurrentActivity;

  /**
   * Information about whether and what might prevent you from joining this person on a fireteam.
   */
  @SpeakeasyMetadata()
  joinability?: DestinyComponentsProfilesDestinyProfileTransitoryComponentJoinability;

  /**
   * The hash identifier for the DestinyDestinationDefinition of the last location you were orbiting when in orbit.
   */
  @SpeakeasyMetadata()
  lastOrbitedDestinationHash?: number;

  /**
   * If you have any members currently in your party, this is some (very) bare-bones information about those members.
   */
  @SpeakeasyMetadata({
    elemType: DestinyComponentsProfilesDestinyProfileTransitoryPartyMember,
  })
  partyMembers?: DestinyComponentsProfilesDestinyProfileTransitoryPartyMember[];

  /**
   * Information about tracked entities.
   */
  @SpeakeasyMetadata({
    elemType: DestinyComponentsProfilesDestinyProfileTransitoryTrackingEntry,
  })
  tracking?: DestinyComponentsProfilesDestinyProfileTransitoryTrackingEntry[];
}
