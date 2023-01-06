package shared

type CrAllocationStrategyEnum string

const (
	CRAllocationStrategyEnumBestFit               CrAllocationStrategyEnum = "BEST_FIT"
	CRAllocationStrategyEnumBestFitProgressive    CrAllocationStrategyEnum = "BEST_FIT_PROGRESSIVE"
	CRAllocationStrategyEnumSpotCapacityOptimized CrAllocationStrategyEnum = "SPOT_CAPACITY_OPTIMIZED"
)
