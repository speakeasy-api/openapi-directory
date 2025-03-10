"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import accountscope_enum as shared_accountscope_enum
from ..shared import lookbackperiodindays_enum as shared_lookbackperiodindays_enum
from ..shared import paymentoption_enum as shared_paymentoption_enum
from ..shared import savingsplanspurchaserecommendationdetail as shared_savingsplanspurchaserecommendationdetail
from ..shared import savingsplanspurchaserecommendationsummary as shared_savingsplanspurchaserecommendationsummary
from ..shared import supportedsavingsplanstype_enum as shared_supportedsavingsplanstype_enum
from ..shared import terminyears_enum as shared_terminyears_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SavingsPlansPurchaseRecommendation:
    r"""Contains your request parameters, Savings Plan Recommendations Summary, and Details."""
    
    account_scope: Optional[shared_accountscope_enum.AccountScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('AccountScope'), 'exclude': lambda f: f is None }})  
    lookback_period_in_days: Optional[shared_lookbackperiodindays_enum.LookbackPeriodInDaysEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('LookbackPeriodInDays'), 'exclude': lambda f: f is None }})  
    payment_option: Optional[shared_paymentoption_enum.PaymentOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PaymentOption'), 'exclude': lambda f: f is None }})  
    savings_plans_purchase_recommendation_details: Optional[list[shared_savingsplanspurchaserecommendationdetail.SavingsPlansPurchaseRecommendationDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('SavingsPlansPurchaseRecommendationDetails'), 'exclude': lambda f: f is None }})  
    savings_plans_purchase_recommendation_summary: Optional[shared_savingsplanspurchaserecommendationsummary.SavingsPlansPurchaseRecommendationSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('SavingsPlansPurchaseRecommendationSummary'), 'exclude': lambda f: f is None }})  
    savings_plans_type: Optional[shared_supportedsavingsplanstype_enum.SupportedSavingsPlansTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('SavingsPlansType'), 'exclude': lambda f: f is None }})  
    term_in_years: Optional[shared_terminyears_enum.TermInYearsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TermInYears'), 'exclude': lambda f: f is None }})  
    