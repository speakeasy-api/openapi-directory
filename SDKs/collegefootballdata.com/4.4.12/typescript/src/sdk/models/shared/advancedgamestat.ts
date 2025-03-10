/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class AdvancedGameStatDefensePassingDowns extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "ppa" })
  ppa?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "successRate" })
  successRate?: number;
}

export class AdvancedGameStatDefensePassingPlays extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "ppa" })
  ppa?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "successRate" })
  successRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalPPA" })
  totalPPA?: number;
}

export class AdvancedGameStatDefenseRushingPlays extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "ppa" })
  ppa?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "successRate" })
  successRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalPPA" })
  totalPPA?: number;
}

export class AdvancedGameStatDefenseStandardDowns extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "ppa" })
  ppa?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "successRate" })
  successRate?: number;
}

export class AdvancedGameStatDefense extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "drives" })
  drives?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "lineYards" })
  lineYards?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "lineYardsTotal" })
  lineYardsTotal?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "openFieldYards" })
  openFieldYards?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "openFieldYardsTotal" })
  openFieldYardsTotal?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "passingDowns" })
  @Type(() => AdvancedGameStatDefensePassingDowns)
  passingDowns?: AdvancedGameStatDefensePassingDowns;

  @SpeakeasyMetadata()
  @Expose({ name: "passingPlays" })
  @Type(() => AdvancedGameStatDefensePassingPlays)
  passingPlays?: AdvancedGameStatDefensePassingPlays;

  @SpeakeasyMetadata()
  @Expose({ name: "plays" })
  plays?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "powerSuccess" })
  powerSuccess?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "ppa" })
  ppa?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "rushingPlays" })
  @Type(() => AdvancedGameStatDefenseRushingPlays)
  rushingPlays?: AdvancedGameStatDefenseRushingPlays;

  @SpeakeasyMetadata()
  @Expose({ name: "secondLevelYards" })
  secondLevelYards?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "secondLevelYardsTotal" })
  secondLevelYardsTotal?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "standardDowns" })
  @Type(() => AdvancedGameStatDefenseStandardDowns)
  standardDowns?: AdvancedGameStatDefenseStandardDowns;

  @SpeakeasyMetadata()
  @Expose({ name: "stuffRate" })
  stuffRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "successRate" })
  successRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalPPA" })
  totalPPA?: number;
}

export class AdvancedGameStatOffensePassingDowns extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "ppa" })
  ppa?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "successRate" })
  successRate?: number;
}

export class AdvancedGameStatOffensePassingPlays extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "ppa" })
  ppa?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "successRate" })
  successRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalPPA" })
  totalPPA?: number;
}

export class AdvancedGameStatOffenseRushingPlays extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "ppa" })
  ppa?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "successRate" })
  successRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalPPA" })
  totalPPA?: number;
}

export class AdvancedGameStatOffenseStandardDowns extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "ppa" })
  ppa?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "successRate" })
  successRate?: number;
}

export class AdvancedGameStatOffense extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "drives" })
  drives?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "explosiveness" })
  explosiveness?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "lineYards" })
  lineYards?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "lineYardsTotal" })
  lineYardsTotal?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "openFieldYards" })
  openFieldYards?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "openFieldYardsTotal" })
  openFieldYardsTotal?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "passingDowns" })
  @Type(() => AdvancedGameStatOffensePassingDowns)
  passingDowns?: AdvancedGameStatOffensePassingDowns;

  @SpeakeasyMetadata()
  @Expose({ name: "passingPlays" })
  @Type(() => AdvancedGameStatOffensePassingPlays)
  passingPlays?: AdvancedGameStatOffensePassingPlays;

  @SpeakeasyMetadata()
  @Expose({ name: "plays" })
  plays?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "powerSuccess" })
  powerSuccess?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "ppa" })
  ppa?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "rushingPlays" })
  @Type(() => AdvancedGameStatOffenseRushingPlays)
  rushingPlays?: AdvancedGameStatOffenseRushingPlays;

  @SpeakeasyMetadata()
  @Expose({ name: "secondLevelYards" })
  secondLevelYards?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "secondLevelYardsTotal" })
  secondLevelYardsTotal?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "standardDowns" })
  @Type(() => AdvancedGameStatOffenseStandardDowns)
  standardDowns?: AdvancedGameStatOffenseStandardDowns;

  @SpeakeasyMetadata()
  @Expose({ name: "stuffRate" })
  stuffRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "successRate" })
  successRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalPPA" })
  totalPPA?: number;
}

export class AdvancedGameStat extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "defense" })
  @Type(() => AdvancedGameStatDefense)
  defense?: AdvancedGameStatDefense;

  @SpeakeasyMetadata()
  @Expose({ name: "gameId" })
  gameId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "offense" })
  @Type(() => AdvancedGameStatOffense)
  offense?: AdvancedGameStatOffense;

  @SpeakeasyMetadata()
  @Expose({ name: "opponent" })
  opponent?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "season" })
  season?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "team" })
  team?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "week" })
  week?: number;
}
